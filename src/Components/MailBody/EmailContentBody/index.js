import React from "react";
import EmailImage from "../../images/Email.png"
import EmailText from "../emailText";
import { styled } from '@mui/material/styles';

const ContentBody1 = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'left',
  width: '100%',
  margin: 'auto',
  marginTop: '25px',
  paddingLeft: '40px',
  
});

const ContentImage = styled('img')({
  marginBottom: '27px',
  width: `90%`,
  right: `10%`,
  top: `400px`,
});

const EmailBodyText = styled('div')({
  paddingLeft: '16px',
  marginTop: '22px',
});
function EmailContentBody (props)  {
  return (
    <ContentBody1 className={props.className}>
       <ContentImage
       src={EmailImage} />
      <EmailText text='jermy'/>
      <EmailBodyText className={props.className}>
        <EmailText text='  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore`'/>
      </EmailBodyText>
    </ContentBody1>
  );
};

export default EmailContentBody;
