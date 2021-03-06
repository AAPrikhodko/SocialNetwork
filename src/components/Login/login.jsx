import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsContols/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import classes from '../Login/login.module.css'



const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/></div>
        <div><Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}/></div>
        <div>
            <button className={classes.loginButton}> Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {

        props.login(formData.email,formData.password,formData.rememberMe)
    }

if (props.isAuth) {
    return <Redirect to={"/profile"}/>
}

    return <div>
        <h3 className={classes.loginHeader}>LOGIN: </h3>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)