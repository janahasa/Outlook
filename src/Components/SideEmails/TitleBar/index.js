import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';

const TitleBar1 = styled('div')({
  fontSize: '1.065rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#fff',
  height: '86px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.114)',
  borderRight: '1px solid rgba(0, 0, 0, 0.114)',
  padding: '0 0.82em 0 1rem',
});

const FirstSectionTitleBar = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '40%',
});

const SecondSectionTitleBar = styled('div')({
  display: 'flex',
  alignItems: 'center',
  color: 'RGB(1, 120, 212)',
  marginTop: '0.25em',
});

const Star = styled(StarOutlineRoundedIcon)({
  marginTop: '0.4em',
  color: 'RGB(1, 120, 212)',
  fontSize: "1.5rem",
});


function TitleBar() {
  return (
    <TitleBar1 className='title-bar'>
      <FirstSectionTitleBar className='first-sec-title-bar'>
        <CheckCircleOutlineIcon sx={{color: "RGB(96, 94, 92)", fontSize: "1.3rem"}}/>
        <span>Inbox</span>
        <Star className='star' /> 
      </FirstSectionTitleBar>      
      <SecondSectionTitleBar className='second-sec-title-bar'>
        <span>Filter</span>
        <KeyboardArrowDownIcon/>
      </SecondSectionTitleBar>      
    </TitleBar1>
  )
}

export default TitleBar
