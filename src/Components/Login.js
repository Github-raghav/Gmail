import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { auth,provider } from '../context/firebase';
import { login } from '../features/userSlice';
import "./Login.css";

function Login() {
    const dispatch=useDispatch();
    const signIn =()=>{
       auth.signInWithPopup(provider)
       .then(({user})=>{
         dispatch(login({
             displayName:user.displayName,
             email:user.email,
            photoUrl:user.photoURL
         }))
       })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.ndtv.com/tech/image/gadget/gmail_logo_635.png"/>
           <Button variant="contained" color="primary" onClick={signIn}>
               Login
           </Button>
            </div>
        </div>
    )
}

export default Login
