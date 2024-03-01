import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react';
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const {user , loginWithRedirect } = useAuth0();
  console.log('Current User' ,user);
  return (
    <div>
 
      
<Auth0Provider
    domain="dev-116d6zqs6nqt5b5w.us.auth0.com"
    clientId="jOVS9utWSMRJtxSzt55NAWOHv1l4KrqM"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,

      <button onClick={e => loginWithRedirect}>Login with Redirect</button>
    </div>
  )
}

export default App