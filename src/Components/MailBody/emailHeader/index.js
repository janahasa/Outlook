import React from "react";
import EmailIcons from "../emailIcons";
import EmailInformation from "../emailInfo/index";
import { styled } from "@mui/material";

const Title11=styled('div')({
    
  display: 'flex',
});

function EmailHeader (props) {
  return (
    <Title11 className={props.className}>
      <EmailInformation />
      <EmailIcons/>
      
    </Title11>
  );
};

export default EmailHeader;
