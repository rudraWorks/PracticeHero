import React,{useContext,useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloseBtn from '../CloseBtn';
import { FilterContext } from '../Filter';

export default function Bookmarked({ label, setFilterArray }) {
  const [bookmarked, setBookmarked] = React.useState('yes');
  const {dispatch} = useContext(FilterContext) 

  useEffect(()=>{
    dispatch({type:'ADD',filter:'bookmarked',value:bookmarked})
  },[bookmarked])
  

  const handleChange = (event) => {
    setBookmarked(event.target.value);
  };

  return (
    <Box m={1}>
      <CloseBtn label={label} setFilterArray={setFilterArray}>
        <FormControl size='small'>
          <InputLabel >{label}</InputLabel>
          <Select
            value={bookmarked}
            label="bookmarked"
            onChange={handleChange}
          >
            <MenuItem value='yes'>Yes</MenuItem> 
            <MenuItem value='no'>No</MenuItem> 

          </Select>
        </FormControl>
      </CloseBtn>
    </Box>
  );
}