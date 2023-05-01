import React from 'react'
import { styled } from '@mui/material'

const User=styled('h2')({
  margin: '0',
  fontWeight:'500',
  fontSize: '1rem',
});
function UserName(props) {
  return (
    <User>{props.sender}</User>
  )
}

export default UserName
