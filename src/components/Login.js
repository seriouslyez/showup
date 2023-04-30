import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GoogleLogin from 'react-google-login';
import { googleLogout } from '@react-oauth/google';
import axios from 'axios';

export default function Login() {
  // const [ user, setUser ] = useState([]);
  // const [ profile, setProfile ] = useState([]);
   
  // const handleLogin = async googleData => {
  //     const res = await fetch("/api/v1/auth/google", {
  //         method: "POST",
  //         body: JSON.stringify({
  //         token: googleData.tokenId
  //       }),
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     })
  //     const data = await res.json()
  //     // store returned user somehow
  // };

  // useEffect(() => {
  //   if (user) {
  //     axios
  //       .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
  //           headers: {
  //               Authorization: `Bearer ${user.access_token}`,
  //               Accept: 'application/json'
  //           }
  //       })
  //       .then((res) => {
  //           setProfile(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //     }
  // },[ user ]);

  // const logOut = () => {
  //   googleLogout();
  //   setProfile(null);
  // };

  return (
    <Stack sx={{mt:"30vh"}} alignItems="center">
    {/* <Typography variant="h2" sx={{mb:5}}>
      showUP
    </Typography> */}
    {/* <GoogleLogin
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
    /> */}
    </Stack>
  );
}