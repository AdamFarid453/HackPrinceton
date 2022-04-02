import React from 'react';
import { Link } from "react-router-dom";


const Signin = () => {
  return (
    <div class="w-full max-w-xs m-auto">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 class="text-center text-xl text-gray-700 font-bold mb-4">Sign In</h1>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Admin Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*************" />
            </div>
            {/* flex items-center justify-between */}
            <div class="block text-center">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4" type="button">
                  Sign In
                </button>
                <a class="block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer mb-6" href="#">
                  Forgot Password?
                </a>
                <label class=''>Don't have an account yet? 
                  <a class='block text-blue-500 hover:text-blue-800 cursor-pointer'><Link to="/signup">Sign Up</Link></a>
                </label>
            </div>
        </form>
      <p class="text-center text-gray-500 text-xs">&copy;OurHackPrincetonGroup2022</p>
    </div>
  )
}

export default Signin
