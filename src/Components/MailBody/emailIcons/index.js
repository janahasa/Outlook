import React from 'react'
import { styled } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconMore from './IconMore/IconMore';
import IconUiRestart from './IconUiRestart/IconUiRestart';
import IconUiRestartCopy from './IconUiRestartCopy/IconUiRestartCopy';

const EmailActions = styled('div')({
  display: `flex`,
  justifyContent: 'end',
  alignItems: `center`,
  padding: `14px 21px`,
  boxSizing: `border-box`,
  width: `50%`,
  columnGap:'22px',
  margin: '5px',
  
});
const CombinedShape = styled(ArrowForwardIcon)({
  color:  '#0178D4',
});



function EmailIcons (props) {
  return (
    <EmailActions className={props.className}>
      <IconUiRestart />
      <IconUiRestartCopy />
      <CombinedShape
        src={ArrowForwardIcon}
        loading="lazy"
        alt={'ArrowForwardIcon'} />
      <IconMore />
    </EmailActions>
 
  )
}

export default EmailIcons