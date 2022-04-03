import React from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const Transfer = () => {
  const {isAuthenticated} = useAuth0();
  if (isAuthenticated) {
    return (// display the dashboard
      <div>
      <h1>hshshs</h1>
      </div>
      
    ) 
  } else {
    return <h1>no</h1> // display the landing
  }
}

export default Transfer