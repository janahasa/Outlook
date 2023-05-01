import React from 'react'
import NavButtons from './NavButtons';
import NavLinks from './NavLinks';
import { styled } from '@mui/material'; 

const Header22=styled('div')({
opacity: '1',
backgroundColor: 'rgba(243,242,241, 1)',
display: 'flex',
alignItems: 'center',
justifyContent: 'flex-start',
height: '70px',
border: '0.4px solid #EDEBF9',

});

function Header2(props) {
  return (
    <Header22 className={props.className}>
        <NavButtons />
        <NavLinks/>
    </Header22>
  )
}

export default Header2