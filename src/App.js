import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import About from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/login";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/authReducer";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {makeStyles} from "@material-ui/core/styles";


/*
const UseStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: 'https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"

    }
}))
*/


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }


     render() {

        if (!this.props.initialized) return <div>Loading</div>


        return (
            <div >
                <HeaderContainer/>
                {/*                <Navbar/>*/}
                <div /*className="app-wrapper-content"*/>
                    <Route path='/Profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/Dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/UsersAPIComponent'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <LoginPage/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/About' render={() => <About/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

