import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

  return (
      isAuthenticated && (
    <button onClick={() => logout()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2">
        Sign Out
    </button>
      )
  )
}

export default SignoutButton
