import React,{useContext} from 'react'
import {Button} from '@mui/material'
import { FilterContext } from './Filter'

function ApplyButton({filterArray}) {
    const {state} = useContext(FilterContext)
    console.log(state)
    console.log(filterArray)
  return (
    <Button sx={{ marginLeft: 'auto' }} disabled={filterArray.length > 0 ? false : true}  variant="contained">Apply
    </Button>
  )
}

export default ApplyButton 