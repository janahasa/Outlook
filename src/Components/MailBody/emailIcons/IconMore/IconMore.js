import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { styled } from '@mui/material/styles';



const IconMore2 = styled(MoreHorizIcon)({
  color: '#0178D4',
});

function IconMore(props) {
  return (
    <div className={props.className}>
      <IconMore2 src={MoreHorizIcon} loading="lazy" alt={'Icon-More'} />
    </div>
  );
}

export default IconMore;
