import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memories from "./images/memories.png";
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from "./styles";
import { useDispatch } from "react-redux"
import { useEffect } from 'react';
import { getPosts } from "./redux/actions/posts";

import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';

function App() {
  const theme = createTheme()
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
          <img className={classes.image} src={memories} alt="icon" height="60" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>

            </Grid>
          </Container>
        </Grow>
      </Container>
    </ThemeProvider>
  )
}

export default App
