import React from 'react'
import Icon from '../Icon'
import UserName from '../UserName'
import Date from '../Date'
import Msg from '../Msg'
import { styled } from '@mui/material'

const CardContainer= styled('div')({
  display: 'flex',
  backgroundColor: '#fff',
  justifyContent: 'space-between',
  width: '360px',
  height: 'auto',
  padding: '0.4375em 1.1em 0.625em 0.8125em',
  boxSizing: 'border-box',
  borderBottom: '1px solid RGB(237, 235, 233)',
});
function Card(props) {
  return (
    <CardContainer className={props.className}>
      <Icon initial={props.init} color={props.color}/>
      <div >
        <UserName sender={props.sender}/>
        <Date time={props.time}/>
        <Msg msg={props.msg}/>
      </div>
    </CardContainer>
  )
}

export default Card