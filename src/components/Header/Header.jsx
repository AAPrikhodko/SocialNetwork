import React from 'react';
import classes from './Header.module.css';
import Redirect, {Link, NavLink, Route} from "react-router-dom";
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LoginPage from "../Login/login";
import CustomizedMenus from "../Common/ButtonCustomizeOpen Menu";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),

    },
    title: {
        flexGrow: 1,
    },
}));


const Header = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <CustomizedMenus />
                    <Typography variant="h6" className={classes.title} align={"center"}>
                        Web Developers Social Network
                    </Typography>

                    {props.isAuth
                        ? <div>{props.login} - <Button variant="contained" onClick={props.logout}>Logout</Button></div>
                        : <Link to="/login">
                            <Button variant="contained" color="inherit">
                                Login
                            </Button>
                        </Link>
                   }
                </Toolbar>
            </AppBar>
        </div>
    )
}


/*
const Header = (props) => {
return (
<header className={classes.header}>
<img src='https://shmector.com/_ph/13/74615743.png'/>

<div className={classes.loginBlock}>
{props.isAuth
? <div>{props.login} - <Button onClick={props.logout}>Logout</Button></div>
: <NavLink to={'/login'}> Login </NavLink>}
            </div>
        </header>
    )
}
*/


export default Header;