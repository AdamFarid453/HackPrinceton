import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Home from './Home';


const Dashboard = () => {
  const {user, isAuthenticated} = useAuth0();

  if (isAuthenticated) { // user is authenticated
    return (
      <div>
        <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-black">Admin Dashboard</h1>
        <div class="m-5">
          <p class="">Nickname: {user.nickname}</p>
          <p class="">User Name: {user.name}</p>
          <p class="">User Email: {user.email}</p>
        </div>
        <form class="w-5/6 bg-blue-300 text-center m-auto border-solid border-2 border-black">
          <div class="grid grid-cols-2">
            <div class="m-auto">
              <input class="block rounded-xl m-14" placeholder='Patient Full Name'></input>
              <input class="block rounded-xl m-14" placeholder='Import Patient History'></input>
              <div class="flex justify-center">
                <div class="mb-3 w-96">
                  <label for="formFile" class="form-label inline-block mb-2 mr-8">Upload Patient Records</label>
                  <input class="form-control block w-full px-3 py-1.5 ml-10 text-base font-normal rounded transition ease-in-out m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" />
                </div>
              </div>
            </div>
            <div class="m-auto">
              <select class="block rounded-xl m-14">
                <option>--Select Hospital--</option>
                {/* MAP LIST OF HOSPITALS */}
              </select>
              <select class="block rounded-xl m-14">
                <option>--Required Machines--</option>
                {/* MAP LIST OF MACHINES */}
              </select>
              <input class="block rounded-xl m-14" placeholder='Doctor Notes'></input>
            </div>
          </div>
          <button onClick={(e) => e.preventDefault()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2">
            Send
          </button>
        </form>
        
      </div>
    )
  } else { // user is NOT authenticated
    return (
      <div>
        <h1>Please Signin if you wish to view your dashboard...</h1>
        <Home />
      </div>
    )
  }
}

export default Dashboard
