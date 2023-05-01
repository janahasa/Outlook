import React from 'react'
import Card from '../Card'
import Seperator from '../Seperator'
import TitleBar from '../TitleBar'
import SelectedCard from '../SelectedCard'
import { inboxMails } from './data'
import { styled } from '@mui/material'

const InboxContainer =styled('div')({
  width: '400px',
  display:'inline-flex',
  flexDirection: 'column',
  backgroundColor: 'RGB(237, 235, 233, 0.4)',
  border: '8px solid #fff',
});


function Inbox(props) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  const currentDate = new Date("May 25");
  const currentMonth =  monthNames[currentDate.getMonth()];
  return (
    
    <InboxContainer className={props.className}>

      <TitleBar/>
      <SelectedCard user="Lorem Ipsum" msg1="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusalo…"/>

      {inboxMails.map((item)=>
        <>
          {item.month !== currentMonth &&
            <Seperator SepTxt= {item.month}/>}
            
          {item.mails.map((element) => 
            <Card sender={element.sender} time={element.time} msg={element.msg} init={element.senderInitial} color={element.color || element.defaultColor}/>
          )}
        </> 
        
        
      )}

    </InboxContainer>
  )
}

export default Inbox
