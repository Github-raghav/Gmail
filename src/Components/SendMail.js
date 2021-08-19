import React from 'react'
import "./SendMail.css"
import CloseIcon from "@material-ui/icons/Close"
import { Button } from '@material-ui/core';
import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';
import {closeSendMessage} from "../features/mailSlice"
import { db } from '../context/firebase';
import firebase from "firebase";


function SendMail() {
    const dispatch=useDispatch();
const {register,handleSubmit,formState: { errors } }=useForm();

const Submit=(FormData)=>{
    console.log(FormData);
  db.collection("emails").add({
      to:FormData.to,
      subject:FormData.subject,
      message:FormData.message,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
  })
  dispatch(closeSendMessage());
}
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail__close"
                onClick={()=>dispatch(closeSendMessage())}
                />
            </div>
            {/* this lib is used to avoid messy like func onchange etc nd for clean code */}
                {/* each input is required to have name to use hook form lib.  */}
                <form onSubmit={handleSubmit(Submit)} >
                <input name="to"
                placeholder="To" 
                type="email"
                {...register('to', { required: true })}
                />
                 {errors.to && <p className="sendMail_error">To is required</p>}
                <input name="subject" placeholder="Subject"
                 type="text"
                {...register('subject', { required: true })}
                 />
                 {errors.subject && <p className="sendMail_error">subject is required</p>}
                <input name="message" 
                placeholder="Message" type="text"
                 className="sendMail__message"
                {...register('message', { required: true })}
                 />
                 {errors.message && <p className="sendMail_error">message is required</p>}
             <div className="sendMail__options">
                 <Button  variant="contained" type="submit" color="primary"
                 className="sendMail__send">Send</Button>
             </div>
                 </form>
        </div>
    )
}

export default SendMail
