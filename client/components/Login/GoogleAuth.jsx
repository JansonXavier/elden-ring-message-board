import React, { useEffect } from 'react';

const GoogleAuth = () => {
  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        client_id: 'http://293464349395-d7a6uogqs54p3dmecvmr85121kh29m8v.apps.googleusercontent.com',
        scope: 'profile'
      })
    });
  }, [])

  return <button>Google Auth</button>
}

export default GoogleAuth;