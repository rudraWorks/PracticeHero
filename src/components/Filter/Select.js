import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ setFilterArray,filterArray }) {
    const [value, setValue] = React.useState('');
    const isInitial = useRef(null) 
 
    const handleChange = (event) => {
        console.log('hi')
        setValue(event.target.value);
    };  

    useEffect(() => {
        if (isInitial.current) {
            if(filterArray.includes(value) || !value)
                return 
            else
            setFilterArray((prev) => {
                return [...prev,value]
            })
        }
        else isInitial.current = true
    }, [value])

    useEffect(()=>{
        if(filterArray.length===0)setValue('')
    },[filterArray])

    return (
        <Box sx={{ width: 140 }}>
            <FormControl fullWidth size='small'>
                <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                <Select
                    labelId="demo-simple-select-label" 
                    id="demo-simple-select"
                    value={value}
                    label="Filter"
                    onChange={handleChange}
                >
                    <MenuItem value='platform' disabled={filterArray.includes('platform')?true:false}>Platform</MenuItem>
                    <MenuItem value='done' disabled={filterArray.includes('done')?true:false}>Done</MenuItem>
                    <MenuItem value='performance' disabled={filterArray.includes('performance')?true:false}>Performance</MenuItem>
                    <MenuItem value='bookmarked' disabled={filterArray.includes('bookmarked')?true:false}>Bookmarked</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
} 