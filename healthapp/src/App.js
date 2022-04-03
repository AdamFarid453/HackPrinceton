import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import SigninButton from "./components/SigninButton";
import SignoutButton from "./components/SignoutButton";
import Home from "./components/Home";

import Profile from "./Profile";
import Dashboard from "./components/Dashboard";
//import Signup from "./Signup";
import RequestInfo from "./RequestInfo";
import ReceivedInfo from "./ReceivedInfo";
import Requests from "./Requests";

const AppBtn = ({ path = "/request", text }) => (
  <a
    href={path}
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2"
  >
    {text}
  </a>
);

function App() {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-100 to-cyan-300">
      <h1 className="text-2xl text-center mb-6">Perch / Hermes / DataHeart</h1>
      <nav>
        <ul className="list-none">
          <li className="inline-block mx-6">
            <button className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
              Menu
            </button>
          </li>
          <li className="inline-block mx-6">
            <SigninButton />
            <SignoutButton />
            <Profile />
          </li>
          <li className="inline-block mx-6">
            <AppBtn path={"/request"} text="RequestInfo" />
          </li>
          <li className="inline-block mx-6">
            <AppBtn path={"/retriveinfo"} text="RetrieveInfo" />
          </li>
          <li className="inline-block mx-6">
            <AppBtn path={"/requests"} text="Requests List" />
          </li>
        </ul>
      </nav>
      <Router>
        {/* <nav className="bg-blue-300">
                    <ul className="list-none inline-block">
                        <Link to="/home"><li className="inline-block bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2 mx-6">Home</li></Link>
                        <Link to="/dashboard" ><li className="inline-block bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2 mx-6">Visit Dashboard</li></Link>
                        <li className="inline-block mx-6"><SigninButton /><SignoutButton /><Profile /></li>
                    </ul>
                </nav> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                {" "}
                <Home />{" "}
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                {" "}
                <Home />{" "}
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                {" "}
                <Dashboard />{" "}
              </>
            }
          />
          <Route
            path="/request"
            element={
              <>
                {" "}
                <RequestInfo />{" "}
              </>
            }
          />
          <Route
            path="/retriveinfo/:containerId"
            element={
              <>
                {" "}
                <ReceivedInfo />{" "}
              </>
            }
          />
          <Route
            path="/requests"
            element={
              <>
                {" "}
                <Requests />{" "}
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                {" "}
                <SigninButton />{" "}
              </>
            }
          />
          <Route
            path="/retriveinfo"
            element={
              <>
                {" "}
                <ReceivedInfo />{" "}
              </>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
