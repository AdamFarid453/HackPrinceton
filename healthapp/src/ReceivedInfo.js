import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Home from "./Home";

const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxODksInVzZXJuYW1lIjoiZ2l0b25nYXZpbmNlbnQ2NEBnbWFpbC5jb20iLCJleHAiOjE2NDkyMzMwNTgsImVtYWlsIjoiZ2l0b25nYXZpbmNlbnQ2NEBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTY0ODk3Mzg1OCwidHdvX2ZhY3Rvcl9hdXRoZW50aWNhdGlvbl9hdXRob3JpemVkIjp0cnVlLCJzdWJzY3JpcHRpb24iOm51bGwsImtleV9pZCI6ImYyMDZiNjNhLTY4OWEtNDMyMS04MDdlLTk1MDFjZjk0ZDVlZSJ9.KuieEzQTVnWVGVHTDEOhxN-GCXfpnHIhozmMmXohNjU";

const config = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
    },
};

const ReceivedInfo = () => {
    const { isAuthenticated } = useAuth0();
    const [data, setData] = useState(null);
    // const { containerId } = useContext(ContainerContext)
    const { containerId } = useParams()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        async function fetchInfo() {
            const resp = await axios.get(
                `https://api.botdoc.io/v1/media/?request=${parseInt(
                    containerId
                )}`,
                config
            );
            setData(resp.data);
        }
        fetchInfo();
    }, [containerId]);

    console.log(data);

    async function downloadAttachment(mediaId, documentName) {
        try {
            // It doesn't matter whether this api responds with the Content-Disposition header or not
            const response = await axios.get(
                `https://api.botdoc.io/v1/module_container_pushpull/media/${parseInt(mediaId)}/download/`,
                {
                    responseType: "blob", // this is important!
                    headers: {
                        Accept: "application/json",
                        Authorization: `JWT ${token}`,
                    },
                }
            );
            const url = window.URL.createObjectURL(new Blob([response.data])); // you can mention a type if you wish
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${documentName}`); //this is the name with which the file will be downloaded
            link.click();
            // no need to append link as child to body.
            setTimeout(() => window.URL.revokeObjectURL(url), 0); // this is important too, otherwise we will be unnecessarily spiking memory!
        } catch (e) { } //error handling }
    }
    if (isAuthenticated) {
    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-8">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                Received Information
            </h2>
            {data?.results?.length === 0 ? (
                <h4 className="text-md text-gray-600">
                    No Information has been uploaded yet!
                </h4>
            ) : (
                <div className="flex flex-row justify-between items-center">
                    <h4>{data?.results[0]?.name}</h4>
                    <button onClick={() => downloadAttachment(data?.results[0]?.id, data?.results[0]?.name)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2">
                        Download
                    </button>
                </div>
            )}
        </section>
    );
            }
            else {
                return (
                    <div>
                        <h1>Please Signin if you wish to view your dashboard...</h1>
                        <Home />
                    </div>
                )
            }
};

export default ReceivedInfo;
