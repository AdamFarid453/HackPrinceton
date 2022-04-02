import React from 'react';
import { Link } from "react-router-dom";


const Signup = () => {
  return (
    <div class="w-full max-w-xs m-auto h-screen">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 class="text-center text-xl text-gray-700 font-bold mb-4">Sign Up</h1>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Admin Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*************" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Confirm Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*************" />
            </div>
            <div class="mb-10">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Select the hospital you represent
                </label>
                <select>
                    <option>---</option>
                    <option>A</option>
                    <option>Princeton Hospital</option>
                    <option>Princeton HealthCare System</option>
                    <option>Penn Medicine Princeton Medical Center</option>
                    <option>Princeton University McCosh Health Center</option>
                    <option>Princeton Hostpital Emergency Department</option>
                    <option>Princeton Medical Institute</option>
                </select>
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-auto mb-6" type="button">
                    Sign Up
                </button>
            </div>
            <div class="text-center">
                <p>Already have an account?</p>
                <p class='m-auto block text-blue-500 hover:text-blue-800 cursor-pointer'><Link to="/signin">
                    Sign In
                </Link></p>
            </div>
        </form>
        <p class="text-center text-gray-500 text-xs">&copy;OurHackPrincetonGroup2022</p>
        <p className="text-center text-gray-500">We &#9829; botdoc</p>
    </div>
  )
}

export default Signup
