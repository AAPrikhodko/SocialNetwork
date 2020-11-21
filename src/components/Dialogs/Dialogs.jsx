import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxlength, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/FormsContols/FormsControls";


const maxLength20 = maxlength(20)

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={'enter your message'}
                    name={"newMessageBody"}
                    component={Textarea}
                    validate={[required, maxLength20]}/>
        </div>
        <div>
            <button> Send</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm({form: "addMessageForm"})(AddMessageForm)

const Dialogs = (props) => {


    let dialogsElements = props.dialogsData.map((el) => <DialogItem id={el.id} key={el.id} name={el.name}/>);
    let messageItems = props.messageData.map(el => <Message message={el.message} key={el.id}/>)
    if (!props.isAuth) return <Redirect to={"/login"}/>

    const addNewMessage = (values) => {
        props.onMessageSend(values.newMessageBody)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messages}> {messageItems}  </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>

                {/*                <div> <textarea placeholder='enter your message'
                                onChange={props.onMessageChange}
                                value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={props.onMessageSend}> Send</button>
                </div>*/}
            </div>
        </div>
    )
}
export default Dialogs;