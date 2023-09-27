import React, {FC} from 'react';
import classes from './../Dialogs.module.css'

export type DialogMessageTypeProps = {
    message: string
}
const Message: FC<DialogMessageTypeProps> = (props) => {
    return <div className={classes.dialog}>{props.message}</div>
}


export default Message;