import React from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const Landing = () => {
  const {isAuthenticated} = useAuth0();
  if (isAuthenticated) {
    return (// display the dashboard
      <div class="flex flex-row mt-20 mb-20">
      <div class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 ">
      <div class="flex items-center justify-between">
      </div>

      <div class="text-center mt-8">
          <a href="#" class="text-center text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">Transfer Patient Data</a>
          <p class="text-center mt-8 text-gray-600 dark:text-gray-300">Send patient history and pending operations to domestic and international hospitals.</p>
      </div>
      
      <div class="flex items-center justify-center mt-8 mb-8">
      <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-sky-400 rounded cursor-pointer hover:bg-sky-400">Transfer</a>
      </div>
      </div>
      <div class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 ">
      <div class="flex items-center justify-between">
      </div>

      <div class="text-center mt-8">
          <a href="#" class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">View Incoming Patients</a>
          <p class="text-center mt-8 text-gray-600 dark:text-gray-300">Read patient history, pending operations, and required machines.</p>
      </div>
      
      <div class="flex items-center justify-center mt-8 mb-8">
      <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-sky-400 rounded cursor-pointer hover:bg-sky-400">View</a>
      </div>
      </div>
      </div>
      
    ) 
  } else {
    return <h1>no</h1> // display the landing
  }
}

export default Landing
