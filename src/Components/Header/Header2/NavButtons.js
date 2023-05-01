import styled from '@emotion/styled';
import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


const NavButtons1=styled('div')({
  marginLeft: '25px',
  width: '10%',
  display: 'flex',
  justifyContent: 'flex-start',
});

const NavButtonsImg= styled(MenuOutlinedIcon)({
  margin: 'auto',
  marginLeft:'3px', 
  height: '50%',
  display: 'flex',
});

const Message=styled('a')({
  padding: '6px',
  borderRadius: '2px',
  border: 'none',
  opacity: '1',
  backgroundColor: 'rgba(1,120,212, 1)',
  color: 'white',
  marginLeft:'15px'
});

function NavButtons(props) {
  return (
    <NavButtons1 className={props.className}>
        <MenuOutlinedIcon />
        <Message className={props.className}>New Message</Message>
    </NavButtons1>
  )
}

export default NavButtons