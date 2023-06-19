import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { useDispatch } from "react-redux"
import { useEffect, useState } from 'react';
import { getPosts } from "./redux/actions/posts";

import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import Navbar from './components/Navbar/Navbar';

function App() {
  const theme = createTheme()
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch, currentId]);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Navbar />
        <Grow in>
          <Container>
            <Grid
              // className={classes.mainContainer}
              container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>

            </Grid>
          </Container>
        </Grow>
      </Container>
    </ThemeProvider>
  )
}

export default App
