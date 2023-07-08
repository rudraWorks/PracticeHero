import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { FilterContext } from './Filter'
import RecordsContext from '../../Contexts/Records/RecordsContext'


function ApplyButton({ filterArray }) {
  const { state } = useContext(FilterContext)
  const {recordsDispatch} = useContext(RecordsContext)
  const handleFilter=()=>{ 
    console.log(state,filterArray)
    recordsDispatch({type:'FILTER',filter:state})
  }
  return (
    <Button sx={{ marginLeft: 'auto' }} disabled={filterArray.length > 0 ? false : true} variant="contained" onClick={() => handleFilter()}>Apply
    </Button>
  )
}

export default ApplyButton 