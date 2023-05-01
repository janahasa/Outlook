import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { styled } from '@mui/material'

const BottomMenu1=styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin:'67px 0px 0px 0px',
  width:'214px',
  boxSizing: 'border-box',
  border: '0.2px solid #EDEBE9',
});


function BottomMenu (props) {
  return (
    <BottomMenu1 className={props.className}>
        <EmailOutlinedIcon sx={{ '&:hover': { color: '#0178D4' } }}/>
        <CalendarMonthOutlinedIcon  sx={{ '&:hover': { color: '#0178D4' } }}/>
        <GroupOutlinedIcon  sx={{ '&:hover': { color: '#0178D4' } }}/>
        <MoreHorizOutlinedIcon  sx={{ '&:hover': { color: '#0178D4', } }}/>
    </BottomMenu1>
  )
}

export default BottomMenu