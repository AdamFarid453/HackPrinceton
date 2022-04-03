import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Footer from "./Footer";
import SigninButton from "./SigninButton";
import SignoutButton from "./SignoutButton";
import Profile from "./Profile";
import Dashboard from "./Dashboard";

function App() {
  

  return (
    <div class="h-screen bg-gradient-to-b from-gray-100 to-cyan-300">
      <h1 class="text-2xl text-center mb-6" >Perch / Hermes / DataHeart</h1>
      <nav>
        <ul class="list-none">
          <li class="inline-block mx-6"><button class="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">Menu</button></li>
          <li class="inline-block mx-6"><SigninButton /><SignoutButton /><Profile /></li>
        </ul>
      </nav>
      <Router>
        <nav class="bg-blue-300">
          <ul class="list-none inline-block">
            <Link to="/home"><li class="inline-block bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2 mx-6">Home</li></Link>
            <Link to="/dashboard" ><li class="inline-block bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2 mx-6">Visit Dashboard</li></Link>
            <li class="inline-block mx-6"><SigninButton /><SignoutButton /><Profile /></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<> <Home /> </>} />
          <Route path="/home" element={<> <Home /> </>} />
          <Route path="/dashboard" element={<> <Dashboard /> </>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
