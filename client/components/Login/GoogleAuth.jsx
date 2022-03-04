import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthDetails';
import { PathContext } from '../../contexts/pathDetails';

const GoogleAuth = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const setPath = useContext(PathContext);

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        client_id: '378018121134-44cni2l2odh2l8kihof260p5ev9flco7.apps.googleusercontent.com',
        scope: 'profile',
        // cookie_policy: 'single_host_origin'
      }).then(() => {
        const auth = window.gapi.auth2.getAuthInstance();
        callback(auth);
      })
    });
  }, [])

  const callback = (auth) => {
    setAuth(auth);
  }

  const handleSignIn = () => {
    // if (!auth.isSignedIn.get()) auth.signIn()
    auth.signIn();
    setPath('/home');
  }

  return <button id="gapi-button" onClick={handleSignIn}>Sign in with Google</button>
}

export default GoogleAuth;
