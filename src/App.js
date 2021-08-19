import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from "./Components/Sidebar"
import Mail from './Components/Mail';
import EmailList from './Components/EmailList';
import SendMail from './Components/SendMail';
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {selectSendMessageIsOpen} from "./features/mailSlice"
import { selectUser } from './features/userSlice';
import Login from './Components/Login';
import { login } from './features/userSlice';
import { auth } from './context/firebase';

function App() {
  const sendMessageIsOpen=useSelector(selectSendMessageIsOpen)
  const user =useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      if(user){
        dispatch(login({
          displayName:user.displayName,
          email:user.email,
          photoUrl:user.photoURL
        }))
      }
    })
  },[])
  return (
    <Router>  
      {!user ? (
        <Login/>
      ):(
        <div className="App">
        <Header/>
        <div className="app__body">
       <Sidebar/>
        <Switch>
          <Route path="/mail">
            <Mail/>
          </Route>
          <Route path="/">
            <EmailList/>
          </Route>
        </Switch>
        </div>
       { sendMessageIsOpen && <SendMail/>}
      </div>
      )}  
      
    </Router>
  );
}

export default App;
