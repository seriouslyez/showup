import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";

let state = {
    response: '',
    email: '',
    password: '',
    responseToPost: '',
  };

export default function Login() {
  const [formError, setFormError] = useState(false);
  const navigate = useNavigate();

  async function callApi () {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }
  async function handleSubmit(event) {
//function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: state.email, password: state.password }),
    });
    const body = await response.text();
    
    state.responseToPost = body;

    if (data.get('email') != '' && data.get('password') != '') {
      navigate("/home");
    }
    else {
      setFormError(true);
    }
  };

  useEffect(() => {
    callApi()
      .then(res => state.response = res.express)
      .catch(err => console.log(err));
  })

  return (
    <Stack sx={{mt:"30vh"}} alignItems="center">
    <Typography variant="h2">
      showUP
    </Typography>
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {formError ? <Alert severity="error">
            Please make sure all fields are completed!
          </Alert> : ''}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Google Email Address"
              name="email"
              autoFocus
              onChange={e => state.email = e.target.value }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={e => state.password = e.target.value}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
    </Box>
    </Stack>
  );
}