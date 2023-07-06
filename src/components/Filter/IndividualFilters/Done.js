import React,{useContext,useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloseBtn from '../CloseBtn';
import { FilterContext } from '../Filter';

export default function Done({ label, setFilterArray }) {
  const [done, setDone] = React.useState('<50%');
  const {dispatch} = useContext(FilterContext) 

  useEffect(()=>{
    dispatch({type:'ADD',filter:'done',value:done})
  },[done])
  

  const handleChange = (event) => {
    setDone(event.target.value);
  };

  return (
    <Box m={1}>
      <CloseBtn label={label} setFilterArray={setFilterArray}>
        <FormControl size='small'>
          <InputLabel >{label}</InputLabel>
          <Select
            value={done}
            label="done"
            onChange={handleChange}
          >
            <MenuItem value='<50%'>{'<50%'}</MenuItem> 
            <MenuItem value='>=50%'>{'>=50%'}</MenuItem> 

          </Select>
        </FormControl>
      </CloseBtn>
    </Box>
  );
}