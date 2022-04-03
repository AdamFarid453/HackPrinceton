import axios from "axios"
import { useState } from "react"

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxODksInVzZXJuYW1lIjoiZ2l0b25nYXZpbmNlbnQ2NEBnbWFpbC5jb20iLCJleHAiOjE2NDkyMDYwMjMsImVtYWlsIjoiZ2l0b25nYXZpbmNlbnQ2NEBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTY0ODk0NjgyMywidHdvX2ZhY3Rvcl9hdXRoZW50aWNhdGlvbl9hdXRob3JpemVkIjp0cnVlLCJzdWJzY3JpcHRpb24iOm51bGwsImtleV9pZCI6ImYyMDZiNjNhLTY4OWEtNDMyMS04MDdlLTk1MDFjZjk0ZDVlZSJ9.l1FGmNDOX3MKX4RBSwjZAirdAF5GB6tpuYo4TvEqTBk"



const config = {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`
    }
}

const Test = () => {
    const [cntId, setCntId] = useState(null)


    const clickBtn = async () => {
        /* const data = { "page_type": "pushpull", }

        const resp1 = await axios.post("https://api.botdoc.io/v1/module_container/container/", data, config)
        const containerId = resp1.data.id;
        console.log(containerId)


        // create recipient
        const data1 = { "first_name": "Jake", "last_name": "Murphy" }
        const resp2 = await axios.post(`https://api.botdoc.io/v1/module_container/container/${containerId}/recipient/`, data1, config)
        const recipientId = resp2.data.id;

        // create recipient type email
        const data3 = { "interface_class": "email", "value": "gitongavincent64@outlook.com" };

        await axios.post(`https://api.botdoc.io/v1/module_container/recipient/${recipientId}/recipient_item/`, data3, config)

        // define email
        const data4 = {
            "subject": "Send Maria's Image",
            "body": "Kindly send autopsy report"
        }
        await axios.post(`https://api.botdoc.io/v1/module_container/container/${containerId}/email/`, data4, config)

        // Create pull feature
        const data5 = {
            "message": "You can embed files inside",
            "allowed_file_extensions": [
                "csv", "png", "jpg", "pdf",
            ],
            "type": "pull",
            "container": containerId,
        }

        await axios.post("https://api.botdoc.io/v1/module_container_pushpull/pushpullfeature/", data5, config)

        // send pull notification
        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            Authorization: `JWT ${token}`
        }
        await axios({ method:"post", url: `https://api.botdoc.io/v1/module_container/container/${containerId}/send_notification/`, headers: headers }) */
        // await axios.post(`https://api.botdoc.io/v1/module_container/container/${containerId}/send_notification/`, { config: config })

        const resp = await axios.get(`https://api.botdoc.io/v1/media/?request=${1492907}`, config)
        console.log(resp.data)


    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl dark:text-white">
                    Join us and get the update <br /> from anywhere
                </h2>

                <div className="mt-6 sm:-mx-2">
                    <div className="inline-flex w-full sm:w-auto sm:mx-2">
                        <div onClick={clickBtn} className="cursor-pointer inline-flex items-center justify-center w-full px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Buy Blox Now
                        </div>
                    </div>

                    <div className="inline-flex w-full mt-4 sm:w-auto sm:mx-2 sm:mt-0">
                        <a href="/" className="inline-flex items-center justify-center w-full px-5 py-2 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                            Start a Journey
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Test
