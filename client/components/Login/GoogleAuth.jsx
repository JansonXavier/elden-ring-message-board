import React, { useContext, useEffect } from 'react';
import { AuthContext, PathContext } from '../../context'

const GoogleAuth = () => {
  const setAuth = useContext(AuthContext)[1];
  const setPath = useContext(PathContext);

  useEffect(() => {
    
  }, [])

  const handleSignIn = () => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        client_id: '378018121134-44cni2l2odh2l8kihof260p5ev9flco7.apps.googleusercontent.com',
        scope: 'profile',
        // cookie_policy: 'single_host_origin'
      }).then(() => {
        const auth = gapi.auth2.getAuthInstance();
        if (!auth.isSignedIn.get()) auth.signIn();
        setAuth(auth)
        setPath('/home');
      })
    });
  }

  return <button id="gapi-button" onClick={handleSignIn}>Sign in with Google</button>
}

export default GoogleAuth;
