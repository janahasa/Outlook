import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { styled } from '@mui/material/styles';


const Shape = styled(KeyboardArrowLeftIcon)({
  margin: '-7px -19px 6px -13px',
  color:  '#0178D4',
});

const Path13 = styled(ReplayIcon)({

  color:  '#0178D4',
});

function IconUiRestartCopy(props) {
  return (
    <div >
      <Shape src={KeyboardArrowLeftIcon} loading="lazy" alt={'Shape'} />
      <Path13 src={ReplayIcon} loading="lazy" alt={'Path 13'} />
    </div>
  );
}

export default IconUiRestartCopy;
