import React from 'react'
import { data } from "./data";
import { styled } from '@mui/material';
import ListItem from '../../SideMenu/ListItem'



const NavLinks1= styled('div')({
  display: 'flex',
  margin:'auto',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '65%',
});

const NavLinkImg=styled('icon')({
  width: '16px',
  color:'rgba(0,90,158,1)',
  marginLeft: '29px',
  marginTop: '5px',
});

const NavItems1=styled('h3')({
opacity: '1',
color: 'rgba(0,90,158,1)',
fontSize: '16px',
fontWeight: '400',
fontStyle: 'normal',
letterSpacing: '0px',
textAlign: 'left',
});

function NavLinks(props) {
  return (
    <NavLinks1 className={props.className}>
      {data.map (item => {
            return <>
            <NavLinkImg>
            {item.icon}
            </NavLinkImg>  
            <NavItems1 className={props.className}>{item.title}</NavItems1></>
          })}
    </NavLinks1>
  )
}

 export default NavLinks