
import React from 'react'
import SideMenu1 from './SideMenu1'
import BottomMenu from './BottomMenu'
import { styled } from '@mui/material'

const LeftSide1=styled('div')({
  backgroundColor:'#F3F2F1',
  width:'268px',
  display: 'inline-flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: '0.2px solid #EDEBF9',
  paddingTop: '8px',
  
});
function SideMenu (props) {
  return (
    <LeftSide1 className={props.className}>
        <SideMenu1 />
        <BottomMenu/>
    </LeftSide1>
  )
}

export default SideMenu