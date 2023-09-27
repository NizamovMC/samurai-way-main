import React, {FC} from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemTypeProps = {
    name: string
    id: number
}
const DialogItem: FC<DialogItemTypeProps> = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={classes.dialog + " " + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


export default DialogItem;