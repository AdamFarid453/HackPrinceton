import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

  return (
      isAuthenticated && (
    <div class="inline-block">
        <img src={user.picture} alt={user.name} width="50px" height="50px" class="inline-block mx-6" />
        <h2 class="inline-block mx-6">{user.name}</h2>
        {/* <p>{JSON.stringify(user, null, 2)}</p> */}
    </div>
      )
  )
}

export default Profile
