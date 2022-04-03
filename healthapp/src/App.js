import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

<<<<<<< HEAD
import Signin from "./components/Signin";
import Signup from "./components/Signup";
=======
import Landing from "./Landing";
import Footer from "./Footer";
import SigninButton from "./SigninButton";
import SignoutButton from "./SignoutButton";
import Profile from "./Profile";
>>>>>>> b6e132277bae4190ba38717cf2d41d9900db3f35

function App() {
  

  return (
    <div class="bg-blue-100">
      <h1 class="text-2xl text-center mb-6" >Perch / Hermes / DataHeart</h1>
      <nav>
        <ul class="list-none">
          <li class="inline-block mx-6"><button class="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">Menu</button></li>
          <li class="inline-block mx-6"><SigninButton /><SignoutButton /><Profile /></li>
        </ul>
      </nav>
      <Router>
<<<<<<< HEAD
        <nav>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </nav>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                {" "}
                <Signin />{" "}
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                {" "}
                <Signin />{" "}
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                {" "}
                <Signup />{" "}
              </>
            }
          />
=======
        <Routes>
          <Route exact path="/" element={<> <Landing /> </>} />
          <Route path="/landing" element={<> <Landing /> </>} />
>>>>>>> b6e132277bae4190ba38717cf2d41d9900db3f35
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
