import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MessageIcon from '@material-ui/icons/MoveToInbox';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import ProfileIcon from '@material-ui/icons/Person';

import {Link, NavLink} from "react-router-dom";
import classes from "../Navbar/Navbar.module.css";

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const profileEntered = () => {
        return <NavLink to="/Profile">
            Profile
        </NavLink>

    }

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Open Menu
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link to="/Profile">
                    <StyledMenuItem>
                        <ListItemIcon>
                            <ProfileIcon fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText primary="Profile"/>
                    </StyledMenuItem>
                </Link>
                <Link to="/Dialogs">
                    <StyledMenuItem>
                        <ListItemIcon>
                            <MessageIcon fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText primary="Messages"/>
                    </StyledMenuItem>
                </Link>
                <Link to="/UsersAPIComponent">
                    <StyledMenuItem>
                        <ListItemIcon>
                            <CodeIcon fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText primary="Developers"/>
                    </StyledMenuItem>
                </Link>
                <Link to="/News">
                    <StyledMenuItem>
                        <ListItemIcon>
                            <MessageIcon fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText primary="News"/>
                    </StyledMenuItem>
                </Link>
                <Link to="/About">
                    <StyledMenuItem>
                        <ListItemIcon>
                            <InfoIcon fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText primary="About"/>
                    </StyledMenuItem>
                </Link>

            </StyledMenu>
        </div>
    );
}
