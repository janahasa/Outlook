import React from 'react'
import { styled } from '@mui/material'

const Seperator1= styled('div')({
  width: '360px',
  height: '42px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '3.786em',
  fontSize: '0.95rem',
  backgroundColor: 'RGB(237, 235, 233, 0.4)',
  borderBottom: '1px solid RGB(237, 235, 233)',
  boxSizing: 'border-box',
});

const Text1= styled('p')({
  margin: 'auto 0',
});

function Seperator(props) {
  return (
    <Seperator1 className={props.className}>
      <Text1>{props.SepTxt}</Text1>
    </Seperator1>
  )
}

export default Seperator
