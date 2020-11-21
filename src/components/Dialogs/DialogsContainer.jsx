import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
        newMessageText: state.dialogsPage.newMessageText,

    }
}
let mapDispatchToProps = (dispatch) => {
    return {

        onMessageSend: (message) => {
            dispatch(addMessageActionCreator(message))
        },
/*
        onMessageChange: (e) => {
            let m = e.target.value;
            dispatch(updateNewMessageActionCreator(m));
        }
*/
    }
}

let DialogsContainer = compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


/*
let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
*/

export default DialogsContainer;