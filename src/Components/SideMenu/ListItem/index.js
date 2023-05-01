import React from 'react'
import ListItemTitle from '../ListItemTitle'
import Count from '../Count'
import { styled } from '@mui/material' 

const ListItem1 =styled('button')({
  margin: '10px -4px ',
  paddingRight: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: 'none',
  width: '256px',
  background: 'none',
  '&:hover': {
    '& .ListItemTitle': {
      color: 'blue'
    }
  }
});

const ListItemSpan= styled('span')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

});
const ListItemIcon = styled('icon')({
  margin: '0px 20px',
  width: '16px',
  height: '14px',

});



function ListItem (props) {
  return (
    <ListItem1 className={props.className}>
      <ListItemSpan>
        <ListItemIcon>
        {props.iconSrc} 
        </ListItemIcon>
        <ListItemTitle title={props.title}/>
      </ListItemSpan>
        {props.count>0 && <Count count={props.count}/>}
    </ListItem1>
  )
}

export default ListItem