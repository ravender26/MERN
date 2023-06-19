import { Container } from '@mui/material';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  const theme = createTheme()

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Navbar />
        <Home />
      </Container>
    </ThemeProvider>
  )
}

export default App
