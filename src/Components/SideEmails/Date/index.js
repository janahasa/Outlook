import React from 'react'
import  { styled } from '@mui/material'

const Date =styled('span')({
  marginTop: '0',
  color: 'rgba(96,94,92,1)', 
  float: 'right',
  fontSize: '0.8rem',
});

function MessageDate(props) {
  return (
    <Date className={props.className}>{props.time}</Date>
  )
}

export default MessageDate
