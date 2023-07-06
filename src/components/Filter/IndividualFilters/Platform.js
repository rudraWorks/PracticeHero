import React,{useContext,useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloseBtn from '../CloseBtn';
import { FilterContext } from '../Filter';

export default function Platform({ label, setFilterArray }) {
  const [platform, setPlatform] = React.useState('leetcode');
  const {dispatch} = useContext(FilterContext) 

  useEffect(()=>{
    dispatch({type:'ADD',filter:'platform',value:platform})
  },[platform])
  

  const handleChange = (event) => {
    setPlatform(event.target.value);
  };

  return (
    <Box m={1}>
      <CloseBtn label={label} setFilterArray={setFilterArray}>
        <FormControl size='small'>
          <InputLabel >{label}</InputLabel>
          <Select
            value={platform}
            label="Platform"
            onChange={handleChange}
          >
            <MenuItem value='leetcode'>Leetcode</MenuItem> 
            <MenuItem value='codeforces'>Codeforces</MenuItem>
            <MenuItem value='codechef'>Codechef</MenuItem>  
            <MenuItem value='other'>Other</MenuItem>
          </Select>
        </FormControl>
      </CloseBtn>
    </Box>
  );
}