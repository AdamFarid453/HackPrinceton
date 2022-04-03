import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

  return (
      isAuthenticated && (
    <div class="inline-block">
        <img src={user.picture} alt={user.name} width="45px" height="45px" class="inline-block ml-6 rounded-3xl" />
        <h2 class="inline-block mx-6">{user.name}</h2>
        {/* <p>{JSON.stringify(user, null, 2)}</p> */}
    </div>
      )
  )
}

export default Profile
