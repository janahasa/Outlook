import React from 'react'
import { styled } from '@mui/material'

const Icon1=styled('span')({
  borderRadius: '100%',
  backgroundColor: 'rgba(142,86,46, 1)',
  width: '3.9rem',
  height: '2.5rem',
  textAlign: 'center',
  color: 'white',
  textTransform: 'uppercase',
  boxSizing: 'border-box',
  margin: '0.67em 1em 0 0',
});

const Text1=styled('p')({
  margin:'0',
  marginTop: '0.4em',
});
function Icon(props) {
  return (
    <Icon1 className={props.className} style={props.color}> <Text1>{props.initial}</Text1> </Icon1>
  )
}

export default Icon
