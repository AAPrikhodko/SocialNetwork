import React from 'react';
import classes from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <div>loading</div>
    }

    return (
            <div className={classes.descriptionBlock}>
                <img className={classes.profileImage} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto }/>
                <div className={classes.profileInfo}>
                    <div>Name: {props.profile.fullName}</div>
                    <div>userID: {props.profile.userId}</div>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
    )
}

export default ProfileInfo;