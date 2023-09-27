import React, {FC} from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Vladimir'},
    {id: 3, name: 'Djo'},
    {id: 4, name: 'Donald'},
    {id: 5, name: 'Boris'}
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Hello'},
    {id: 5, message: 'Yo'}
]

let dialogElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

let messageElements = messagesData.map(message => <Message message={message.message}/>)

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogElements}
                <div className={classes.dialog}>
                </div>
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>

    )
}

export default Dialogs;