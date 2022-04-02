import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Signin from "./Signin";
import Signup from "./Signup";


function App() {
  return (
    <div>
      <h1 className="text-center">We ❤️ botdoc</h1>

      <Router>
        <nav>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </nav>
        <Routes>
          <Route exact path="/" element={<> <Signin /> </>} />
          <Route path="/signin" element={<> <Signin /> </>} />
          <Route path="/signup" element={<> <Signup /> </>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
