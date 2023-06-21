import { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import memories from "../../images/memories.png";
// import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../redux/actions/actionTypes';


const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate('/auth');
    setUser(null);
  };

  useEffect(() => {
    // const token = user?.sub;

    // if (token) {
    //   if (token.exp * 1000 < new Date().getTime()) logout();
    // }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.authData ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.authData?.data?.name || "user"} src={user?.authData?.data?.picture}>{user?.authData?.data?.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.authData?.data?.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;