import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxlength} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsContols/FormsControls";
import Button from "@material-ui/core/Button";

/*

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const BasicTextFields = () => {
    const classes = useStyles();
    return <TextField className={classes.root} id="outlined-basic" label="input new pos" variant="outlined" />
}

*/


const maxLength30 = maxlength(30);

const MyPostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field placeholder={"Input new post"}
               name={"addPostMessage"}
               component={Textarea}
               validate={[maxLength30]}/>
        <button variant="contained"> Add post</button>
    </form>
}

const MyPostFormRedux = reduxForm({form: "addPost"})(MyPostsForm)


const MyPosts = (props) => {

    let postItems = props.postData.map((el) => <Post message={el.message} likecount={el.likecount}/>);


    const addNewPost = (values) => {
        props.onAddPost(values.addPostMessage)
    }


    return (
        <div className={classes.postsBlock}>
            <h3 className={classes.postsHeader}> MY POSTS: </h3>
            <MyPostFormRedux onSubmit={addNewPost}/>
            <div className={classes.posts}>
                {postItems}
            </div>
        </div>
    )
}

export default MyPosts;