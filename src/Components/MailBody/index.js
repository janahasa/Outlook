import React from 'react';
import { styled } from '@mui/material/styles';
import EmailTitle from "./emailTitle";
import EmailContent from "./emailContent";



const EmailBodyContainer1  = styled('div')({
    
  backgroundColor: 'rgba(243, 242, 241, 1)',
  width: '50%',
  padding:'1em 100px 1em 100px',
  overflow: 'hidden',
  display:'inline-flex',
  position:'absolute',
  right: '0',
 
});




function MailBody(props) {
  return (  
    <EmailBodyContainer1 className={props.className}>
      <EmailTitle />
      <EmailContent />
    </EmailBodyContainer1>
  )}

  export default MailBody;