import React from 'react'
import { styled } from '@mui/material/styles';

const ListItemTitle1= styled('p')({
  fontSize: '15px',
  fontWeight: '500',
  color: '#323130',
  paddingLeft:'21px',
  userSelect: 'none',
  '&:hover': {
    color: 'blue'
  }
 
});

function ListItemTitle (props) {
  return (
    <ListItemTitle1 className={props.className}>{props.title}</ListItemTitle1>
  )
}

export default ListItemTitle