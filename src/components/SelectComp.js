import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from 'react'

export default function SelectComp() {
  const [platform, setPlatform] = useState('');

  const handleChange = (event) => {
    setPlatform(event.target.value);
  };
  return ( 
    <div>
     
      <FormControl sx={{ minWidth: 120 }}>
        <Select
          value={platform}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            Leetcode
          </MenuItem>
          <MenuItem value={10}>Codeforces</MenuItem>
          <MenuItem value={20}>Codechef</MenuItem>
          <MenuItem value={30}>Atcoder</MenuItem>
          <MenuItem value={30}>Other</MenuItem>
        </Select>
        <FormHelperText>Coding platform</FormHelperText>
      </FormControl>
    </div>
  );
}