import React from "react";
import EmailText from "../emailText";
import { styled } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import zIndex from "@mui/material/styles/zIndex";

const EmailAddress = styled('div')({
  display: `flex`,
  columnGap:'11px',
  width: `50%`,


});

const ThEmail = styled('div')({
  textAlign: `left`,
  fontSynthesis: `none`,
  color: ` rgba(50, 49, 48, 1);`,
  fontStyle: `normal`,
  fontFamily: `sans-serif;`,
  fontWeight: `520`,
  fontSize: `16px`,
  letterSpacing: `0.0009558823658153415px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `247px`,
  paddingBottom: '12px',
  
});

const To = styled('div')({
 
    display: 'flex',
    alignItems: 'end',
    columnGap: '7px',

});
const You = styled('p')({
 
  padding: '0',
  margin: '0',

});

const CharA = styled('div')({
  height: '40px',
  width: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:'#fff',
  backgroundColor:'#D13438',
  borderRadius: '50%',
  border: '1px solid #D13438',

});
const IconContact1 = styled('div') ({
  width: '70%',
  margin: '0px',
});

function EmailInformation (props) {
  return (
    <EmailAddress className={props.className}>
      <CharA className={props.className}>A</CharA>
      <IconContact1 className={props.className}>
        <ThEmail className={props.className}>Lorem Ipsum &lt;no_reply@loremipsum.com&gt;</ThEmail>
        <div >
          <EmailText text ='Thu 6/18/2020 4:49 PM' />
          <To className={props.className}>
            <You>To:</You>
            <EmailText text='You'/>
          </To>
        </div>
      </IconContact1>
    </EmailAddress>
  );
};

export default EmailInformation;
