import { Container } from '@mui/material';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const theme = createTheme()

  return (
    <>
      <GoogleOAuthProvider clientId='667738762491-sdb2be6lr5n5dufbvab40bfrdrbddhb0.apps.googleusercontent.com'>
        <ThemeProvider theme={theme}>
          <Container maxWidth="lg">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="auth" element={<Auth />} />
            </Routes>
          </Container>
        </ThemeProvider >
      </GoogleOAuthProvider>
    </>
  )
}

export default App
