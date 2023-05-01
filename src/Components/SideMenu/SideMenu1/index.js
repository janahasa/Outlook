import React from 'react'
import ListItem from '../ListItem'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';


const SideMenu1 = () => {
  let ListData = [['Favorites',<ArrowForwardIosOutlinedIcon/>,0],['Folders',<KeyboardArrowDownOutlinedIcon/>,0],
  ['Inbox',<InboxOutlinedIcon/>,0],['Junk Email',<BlockOutlinedIcon/>,9],['Drafts',<EditOutlinedIcon/>,0],
  ['Sent Items',<NearMeOutlinedIcon/>,0],['Scheduled',<AccessTimeOutlinedIcon/>,0],
  ['Deleted Items',<DeleteOutlineOutlinedIcon/>,6],['Archive',<Inventory2OutlinedIcon/>,0],['Notes',<NoteOutlinedIcon/>,0]];
  return (
    <div>
      {ListData.map((item,index)=>{
        return <ListItem title={item[0]} iconSrc={item[1]} count={item[2]}/>
      })}
    </div>
  )
}

export default SideMenu1