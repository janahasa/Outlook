import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import { styled } from '@mui/material/styles';



const Shape = styled(ReplayIcon)({

  color:  '#0178D4',
});

function IconUiRestart(props) {
  return (
    <div >
      <Shape src={ReplayIcon} loading="lazy" alt={'Shape'} />
    </div>
  );
}

export default IconUiRestart;
