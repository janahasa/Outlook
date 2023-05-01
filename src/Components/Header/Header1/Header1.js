import ControlButton from "./ControlButton"
import SearchBar from "./SearchBar"
import Navigation from "./Navigation"
import { styled } from "@mui/material";


const Header11= styled('button')({  
    width: '100%',
     height: '68px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0178D4',
});

function Header1 (props) {
    return (
    <Header11 className={props.className}>
        <ControlButton/>
        <SearchBar />
        <Navigation/>
    </Header11>
);
}

export default Header1