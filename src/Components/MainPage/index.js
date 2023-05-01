import React from 'react';
import { styled } from '@mui/material/styles';
import Header from '../Header';
import MailBody from '../MailBody';
import LeftSide from '../SideMenu';
import Inbox from '../SideEmails/Inbox';



function Home(props) {
  return (
    <>
        <Header/>
        <LeftSide/>
        <Inbox/>
        <MailBody/> 
    
    </> 
  );
}

export default Home;