import React from 'react';
import './Play.css';



const Landing = ()=> {
  return (
    <div class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className='play-page' id='wrapper'>
      <div id='first'>
      <h2>Transfer Patient Data</h2>
      <h3>Send patient history and pending operations to domestic and international hospitals</h3>
      <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        Transfer
    </button>
      </div>
      <div id='second'>
      <h2>View Incoming Patients</h2>
      <h3>Read patient history, pending operations, and required machines</h3>
      <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        View
    </button>
      </div>
    </div>
    </div>
    
  );
}

export default Landing;