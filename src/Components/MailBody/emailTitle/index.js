import React from "react";
import { styled } from "@mui/material";

const EmailTitle1= styled('h3')({
  textAlign: 'left',
  marginLeft: '14px',
  position: 'absolute',
  whiteSpace: 'nowrap',
  color: `rgba(50, 49, 48, 1)`,
  fontStyle: `normal`,
  fontFamily: 'sans-serif',
  fontWeight: `600`,
  fontSize: `18px`,
  letterSpacing: `0.0012499999720603228px`,
 
});

function EmailTitle (props) {
  return(    
  <EmailTitle1 className="email-title"> Lorem Ipsum</EmailTitle1>
  );
  
};

export default EmailTitle;
