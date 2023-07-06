import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState,useEffect} from 'react'

export default function SelectPlatform({setPlatformParent}) {
  const [platform, setPlatform] = useState('leetcode');
  
  useEffect(()=>{
    setPlatformParent(platform)
  },[platform])

  const handleChange = (event) => {
    setPlatform(event.target.value);
  }
  
  return ( 
    <div>
     
      <FormControl sx={{ minWidth: 120 }}>
        <Select
          value={platform}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="leetcode">Leetcode</MenuItem>
          <MenuItem value='codeforces'>Codeforces</MenuItem>
          <MenuItem value='codechef'>Codechef</MenuItem>
          <MenuItem value='other'>Other</MenuItem>
        </Select>
        <FormHelperText>Coding platform</FormHelperText>
      </FormControl>
    </div>
  );
}