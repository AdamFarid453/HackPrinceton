import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ReactComponent as Icon } from "./images/iconLoader.svg";
import { ReactComponent as Hamburger } from "./images/hamburger.svg";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import SigninButton from "./components/SigninButton";
import SignoutButton from "./components/SignoutButton";
import Profile from "./Profile";

function App() {
  return (
    <div class="h-screen bg-gradient-to-b from-gray-100 to-blue-300">
      <Icon class="cursor-pointer" />
      <Hamburger class="cursor-pointer mt-4" />
      <h1 class="text-2xl text-center mb-6">Hermes</h1>
      <nav>
        <ul class="list-none position">
          <li class="inline-block mx-6">
            <button class="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
              Menu
            </button>
          </li>
          <li class="inline-block mx-6">
            <SigninButton />
            <SignoutButton />
            <Profile />
          </li>
        </ul>
      </nav>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                {" "}
                <Landing />{" "}
              </>
            }
          />
          <Route
            path="/landing"
            element={
              <>
                {" "}
                <Landing />{" "}
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
