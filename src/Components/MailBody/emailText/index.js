import React from 'react'
import { styled } from '@mui/material';

const LoremIpsumDolorSi = styled('p')({
textAlign: `left`,
padding: '0',
margin: '0',
color: `rgba(96, 94, 92, 1)`,
fontStyle: `normal`,
fontFamily: `sans-serif;`,
fontWeight: `500`,
fontSize: `18px`,
letterSpacing: `0.0009558823658153415px`,
textDecoration: `none`,
textTransform: `none`,
width: `90%`,
left: `56%`,
top: `669px`,
});
function EmailText (props){
  return (
    <LoremIpsumDolorSi className={props.className}>{props.text}</LoremIpsumDolorSi>
  )
}

export default EmailText