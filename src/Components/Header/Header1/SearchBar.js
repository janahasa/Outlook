import { styled } from '@mui/material'; 
import SearchIcon from '@mui/icons-material/Search';


const SearchBar1= styled ('div') ({
    width: '350px',
    height: '31px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#C7E0F4',
    borderRadius: '2px',
});

const SearchBarButton= styled('button')({
    border: 'none',
    backgroundColor: 'transparent',
    marginLeft: '1em',
});
const SearchBarInput = styled('input')({
    backgroundColor: 'transparent',
    color: '#005A9E',
    outline: 'none',
    border: 'none',
    fontSize: '14px',
    marginLeft: '1em', 
    '&[type="search"]': {
        appearance: 'none',
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
      },

    
});


function SearchBar(props) 
{
    return( 
    <SearchBar1 className={props.className}>
    <SearchBarButton className={props.className}>
    <SearchIcon/>
    </SearchBarButton>
    <SearchBarInput type="search" placeholder='Search' />
    </SearchBar1>
    );
}

export default SearchBar