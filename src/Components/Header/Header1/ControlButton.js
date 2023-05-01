/* eslint-disable jsx-a11y/alt-text */
import menuIcon from '../../images/menuIcon.png'
import { styled } from '@mui/material';

const ControlButton1 = styled('button')({
    
        backgroundColor:'transparent',
        border: 'none',
        cursor: 'pointer',
    
  });

function ControlButton (props) {
    return(
    <ControlButton1 className={props.className}>
    <img src={menuIcon} />
    </ControlButton1>
    );
}


export default ControlButton