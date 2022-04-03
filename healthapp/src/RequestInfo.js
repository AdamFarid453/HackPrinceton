import { useContext, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { ContainerContext } from "./context";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxODksInVzZXJuYW1lIjoiZ2l0b25nYXZpbmNlbnQ2NEBnbWFpbC5jb20iLCJleHAiOjE2NDkyMzMwNTgsImVtYWlsIjoiZ2l0b25nYXZpbmNlbnQ2NEBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTY0ODk3Mzg1OCwidHdvX2ZhY3Rvcl9hdXRoZW50aWNhdGlvbl9hdXRob3JpemVkIjp0cnVlLCJzdWJzY3JpcHRpb24iOm51bGwsImtleV9pZCI6ImYyMDZiNjNhLTY4OWEtNDMyMS04MDdlLTk1MDFjZjk0ZDVlZSJ9.KuieEzQTVnWVGVHTDEOhxN-GCXfpnHIhozmMmXohNjU";

const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `JWT ${token}`,
  },
};

const RequestInfo = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");
  const { setContainerId } = useContext(ContainerContext);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const clickSubmit = async () => {
    const data = {
      page_type: "pushpull",
      callback_url: "http://localhost:3000/recieveinfo",
    };
    // const data = { "api_key": "1464287ca5e91c3e0b4c526c02100f834f1c6d5f", "email":"gitongavincent64@gmail.com" };

    const resp1 = await axios
      .post(
        "https://api.botdoc.io/v1/module_container/container/",
        data,
        config
      )
      .catch((err) => console.log(err.message));

    console.log(resp1?.data);
    /* const resp1 = await axios.post(
            "https://api.botdoc.io/v1/auth/get_token/",
            data,
            config
        ).catch(err => console.log(err.message))

        console.log(resp1.data) */

    const containerId = resp1.data.id;
    setContainerId(containerId);
    localStorage.setItem("containerId", JSON.stringify(containerId));
    console.log(containerId, "this is the container id", typeof containerId);

    // create recipient
    const data1 = {
      first_name: user?.given_name,
      last_name: user?.family_name,
    };
    const resp2 = await axios.post(
      `https://api.botdoc.io/v1/module_container/container/${containerId}/recipient/`,
      data1,
      config
    );
    const recipientId = resp2.data.id;

    // create recipient type email
    const data3 = { interface_class: "email", value: email };

    await axios.post(
      `https://api.botdoc.io/v1/module_container/recipient/${recipientId}/recipient_item/`,
      data3,
      config
    );

    // define email
    const data4 = {
      subject: subject,
      body: body,
    };
    await axios.post(
      `https://api.botdoc.io/v1/module_container/container/${containerId}/email/`,
      data4,
      config
    );

    // Create pull feature
    const data5 = {
      message: message,
      allowed_file_extensions: ["csv", "png", "jpg", "pdf"],
      type: "pull",
      container: containerId,
    };

    await axios.post(
      "https://api.botdoc.io/v1/module_container_pushpull/pushpullfeature/",
      data5,
      config
    );

    // send pull notification
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };
    await axios({
      method: "post",
      url: `https://api.botdoc.io/v1/module_container/container/${containerId}/send_notification/`,
      headers: headers,
    });
    navigate("/retriveinfo");
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Request Information
      </h2>

      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="username"
          >
            Email Address of Recipient
          </label>
          <input
            id="username"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ryan@gmail.com"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="emailAddress"
          >
            Subject of Request
          </label>
          <input
            id="emailAddress"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            type="email"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="password"
          >
            Description of request
          </label>
          <input
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            type="text"
            placeholder="Description of request ..."
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="passwordConfirmation"
          >
            Private Notes of Request
          </label>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type something ..."
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => {
            handleClick();
            clickSubmit();
          }}
          className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Request
        </button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            A request email has been sent to the recipient.
          </Alert>
        </Snackbar>
      </div>
    </section>
  );
};

export default RequestInfo;
