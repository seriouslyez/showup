import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formError, setFormError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    if (data.get('email') != '' && data.get('password') != '') {
      navigate("/home");
    }
    else {
      setFormError(true);
    }
  };

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
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
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