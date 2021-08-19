import { Checkbox,IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsIcon from '@material-ui/icons/Settings';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import React, { useEffect, useState } from 'react';
import "./EmailList.css";
import InboxIcon from '@material-ui/icons/Inbox';
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from '../context/firebase';


function EmailList() {

    const[emails,setEmails]=useState([]);

    useEffect(()=>{
        db.collection("emails").orderBy("timestamp","desc").onSnapshot((snapshot=>{
            setEmails(
                snapshot.docs.map((doc)=>({
                    id:doc.id,
                    data:doc.data(),
                }))
            )
        }))
    },[])

    return (
        <div className="emailList">
           <div className="emailList__setting">
               <div className="emailList__settingLeft">
                   <Checkbox/>
                   <IconButton>
                  <ArrowDropDownIcon/>
                   </IconButton>
                   <IconButton>
                  <RedoIcon/>
                   </IconButton>
                   <IconButton>
                  <MoreVertIcon/>
                   </IconButton>
               </div>
               <div className="emailList__settingLeft">
               <IconButton>
                  <ChevronLeftIcon/>
                   </IconButton>
                   <IconButton>
                  <ChevronRightIcon/>
                   </IconButton>
                   <IconButton>
                  <KeyboardHideIcon/>
                   </IconButton>
                   <IconButton>
                  <SettingsIcon/>
                   </IconButton>
               </div>
               </div> 
     <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red"selected></Section>
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8"></Section>
        <Section Icon={LocalOfferIcon} title="Promotions" color="green"></Section> 
     </div>
    
    <div className="emailList__List">
        {emails.map(({id,data :{message,to,subject,timestamp} }) =>(
            <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp ?.seconds*1000).toUTCString()}
            />
        ))}
        <EmailRow title={"raghav"}
          subject={"heyheyhey"}
          description={"its a test"}
          time={"10pm"}          
        />
         <EmailRow title={"raghav"}
          subject={"heyheyhey"}
          description={"its a test"}
          time={"10pm"}          
        />
         <EmailRow title={"raghav"}
          subject={"heyheyhey"}
          description={"its a test"}
          time={"10pm"}          
        />
         <EmailRow title={"raghav"}
          subject={"heyheyhey"}
          description={"its a test"}
          time={"10pm"}          
        />
         <EmailRow title={"raghav"}
          subject={"heyheyhey"}
          description={"its a test"}
          time={"10pm"}          
        />
         <EmailRow title={"raghav"}
          subject={"heyheyhey"}
          description={"its a test"}
          time={"10pm"}          
        />
         <EmailRow title={"raghav"}
          subject={"heyheyhey"}
          description={"its a test"}
          time={"10pm"}          
        />
         <EmailRow title={"raghav"}
          subject={"heyheyhey"}
          description={"its a test"}
          time={"10pm"}          
        />
    </div>

        </div>
    )
}

export default EmailList
