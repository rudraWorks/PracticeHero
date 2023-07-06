import React,{useContext,useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloseBtn from '../CloseBtn';
import { FilterContext } from '../Filter';

export default function Performance({ label, setFilterArray }) {
  const [performance, setPerformance] = React.useState('1 star');
  const {dispatch} = useContext(FilterContext) 

  useEffect(()=>{
    dispatch({type:'ADD',filter:'performance',value:performance})
  },[performance])
  

  const handleChange = (event) => {
    setPerformance(event.target.value);
  };

  return (
    <Box m={1}>
      <CloseBtn label={label} setFilterArray={setFilterArray}>
        <FormControl size='small'>
          <InputLabel >{label}</InputLabel>
          <Select
            value={performance}
            label="performance"
            onChange={handleChange}
          >
            <MenuItem value='1 star'>1 star</MenuItem> 
            <MenuItem value='2 star'>2 star</MenuItem>
            <MenuItem value='3 star'>3 star</MenuItem>  
            <MenuItem value='4 star'>4 star</MenuItem>
            <MenuItem value='5 star'>5 star</MenuItem>

          </Select>
        </FormControl>
      </CloseBtn>
    </Box>
  );
}