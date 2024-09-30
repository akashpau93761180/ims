import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import NotificationAlert from 'react-notification-alert';
import 'react-notification-alert/dist/animate.css';

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: '100vh',
  width: '100vw',
  padding: 20,
  backgroundImage: `url('/Images/LoginPageBG.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  maxWidth: '450px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
}));

export default function SignIn() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPassWordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const notificationAlert = React.useRef();

  const notify = (msg, type = 'danger') => {
    console.log('Notification:', msg, type); // Add logging for debugging

    const options = {
      place: 'tr', // top right
      message: (
        <div>
          <div>
            {msg}
          </div>
        </div>
      ),
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7,
    };

    notificationAlert.current.notificationAlert(options);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginPayload = {
      UserName: data.get('email'),
      Password: data.get('password'),
    };

    try {
      const response = await axios.post('https://localhost:7218/api/Account/Login', loginPayload);

      debugger;
      if (response.data.code === 200) {
        localStorage.setItem('authToken', response.data.refreshToken);
        window.location.href = '/dashboard';
      } else {
        notify('Login failed. Please check your credentials.', 'danger');
      }
    } catch (error) {
      notify('An error occurred while logging in.', 'danger');
    }
  };

  return (
    <SignInContainer>
      <CssBaseline />
      <Card variant="outlined">
        <Typography component="h1" variant="h4" sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              error={emailError}
              helperText={emailErrorMessage}
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={emailError ? 'error' : 'primary'}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              error={passwordError}
              helperText={passwordErrorMessage}
              id="password"
              type="password"
              name="password"
              placeholder="*****"
              autoComplete="password"
              required
              fullWidth
              variant="outlined"
              color={passwordError ? 'error' : 'primary'}
            />
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Sign In
          </Button>
        </Box>
      </Card>
      <NotificationAlert ref={notificationAlert} />
    </SignInContainer>
  );
}