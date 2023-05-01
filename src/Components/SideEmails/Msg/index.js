import React from 'react'
import { styled } from '@mui/material'

const Msg1=styled('p')({
  margin: '0',
  color: 'rgba(96,94,92,1)',
  fontSize: '1rem',
});

function Msg(props) {
  return (
    <Msg1 className={props.className}>{props.msg}</Msg1>
  )
}

export default Msg
