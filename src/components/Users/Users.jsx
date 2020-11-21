import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import Papyrus from "../../assets/images/bg8.jpg"


import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

const useStylesButtonFollow = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


const UseStylesBackground = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${Papyrus})`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain"

    }
}))

const useStylesTypography = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
});

let Users = (props) => {

    const classesButtonFollow = useStylesButtonFollow();
    const classesBackground = UseStylesBackground();
    const classesTypography = useStylesTypography();

    return <div className={classesBackground.root}>
        {
            props.users.map(u =>
                <div className={styles.usersWrapper} key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <span> <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                    className={styles.usersPhoto}/> </span>
                        </NavLink>

                    </div>

                    < div className={styles.usersInfo}>
                        <Typography variant="button" display="block" gutterBottom>Name: {u.name}</Typography>

                        {u.lookingForAJob != null ? <Typography variant="button" display="block"
                                                                gutterBottom>lookingForAJob: {u.lookingForAJob} </Typography> :
                            <Typography variant="button" display="block" gutterBottom>lookingForAJob: No
                                Information</Typography>}

                        {u.lookingForAJobDescription != null ? <Typography variant="button" display="block"
                                                                           gutterBottom>lookingForAJobDescription: {u.lookingForAJobDescription} </Typography> :
                            <Typography variant="button" display="block" gutterBottom>lookingForAJobDescription: No
                                Information</Typography>}

                        <Typography variant="button" display="block" gutterBottom>Contacts</Typography>

                        {u.github != null ? <Typography variant="button" display="block" gutterBottom
                                                        className={styles.contacts}> github: {u.github} </Typography> :
                            <Typography variant="button" display="block" gutterBottom
                                        className={styles.contacts}> github: No Information</Typography>}

                        {u.facebook != null ? <Typography variant="button" display="block" gutterBottom
                                                          className={styles.contacts}> facebook: {u.facebook} </Typography> :
                            <Typography variant="button" display="block" gutterBottom> </Typography>}

                        {u.instagram != null ? <Typography variant="button" display="block" gutterBottom className={styles.contacts}>   instagram: {u.instagram} </Typography> :
                            <Typography variant="button" display="block" gutterBottom className={styles.contacts}>   instagram: No Information</Typography>}

                        {u.youtube != null ? <Typography variant="button" display="block" gutterBottom className={styles.contacts}>   youtube: {u.youtube} </Typography> :
                            <Typography variant="button" display="block" gutterBottom className={styles.contacts}>   youtube: No Information</Typography>}

                            </div>


                            <div className={classesButtonFollow.root, styles.buttonFollow}>
                            {u.followed
                            ? <Button variant="contained" color="secondary"
                            disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id)
                            }}>UNFOLLOW</Button>
                            : <Button variant="contained" color="primary"
                            disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id)
                            }}>FOLLOW</Button>}
                            </div>
                            </div>
                            )
                            }
                            </div>
                            }


                            /*

                            let Users = (props) => {

                            return <div>
                            {
                            props.users.map(u =>
                            <div key={u.id}>
                            <span>
                            <NavLink to={'/profile/' + u.id}>
                            <div> <img src={u.photos.small != null ? u.photos.small : userPhoto}
                            className={styles.usersPhoto}/> </div>
                            </NavLink>
                            <div>
                            {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id)
                            }}>UNFOLLOW</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id)
                            }}>FOLLOW</button>}

                            </div>
                            </span>
                            <span>
                            <span>
                            <div>Name: {u.name}</div>
                            <div>Status:{u.status}</div>
                            </span>
                            <span>
                            <div>Country:{u.country}</div>
                            <div>City:{u.city}</div>
                            </span>
                            </span>
                            </div>
                            )
                            }
                            </div>
                            }
                            */

                            export default Users