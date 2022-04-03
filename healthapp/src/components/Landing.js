import React from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const Landing = () => {
  const {isAuthenticated} = useAuth0();
  if (isAuthenticated) {
    return <h1>yes</h1> // display the dashboard
  } else {
    return <h1>no</h1> // display the landing
  }
  // return (
  //   <div>
  //     <div>
  //       <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-black">What we do...</h1>
  //     </div>

  //     <div>
  //       <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-black">How we do it...</h1>
  //     </div>
            
      
  //   </div>
  // )
}

export default Landing
