import React from 'react'
import UserName from '../UserName'
import Msg from '../Msg'
import { styled } from '@mui/material';

const Radio=styled('div')({
  margin: '0em 0.5em 0 1.3em',
  width: '28px',
  boxSizing: 'border-box',
  display: 'inline-flex',
});

const Selected1=styled('div')({
  width: '360px',
  height: '86px',
  backgroundColor: 'RGB(199, 224, 244)',
  //  paddingRight: '20px',
  overflow: 'hidden'
});
const SelectedInput=styled('input')({
  width: '332px',
  height: '81px',
  backgroundColor: 'RGB(199, 224, 244)',
  paddingRight: '25px',
  overflow: 'hidden'
});

const Sent=styled('div')({
  marginLeft: '4.2em',
  marginTop: '-78px',

});

function SelectedCard( props) {
  return (
    <Selected1 className={props.className}>
      <Radio className='radio'> 
      <SelectedInput type="radio" className={props.className}/>
      </Radio>
      <Sent className={props.className}>
        <UserName sender= {props.user}/>
        <Msg msg= {props.msg1} />
      </Sent>
    </Selected1>
    
  )
}

export default SelectedCard
