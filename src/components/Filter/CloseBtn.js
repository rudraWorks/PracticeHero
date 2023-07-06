import React,{useContext} from 'react'
import { Badge } from '@mui/material'
import { FilterContext } from './Filter'

function CloseBtn({children,setFilterArray,label}) {
  const {dispatch} = useContext(FilterContext)
  function handleDelete(){
    setFilterArray((prev)=>prev.filter((item)=>item!=label))
    dispatch({type:'DELETE',filter:label})
  }
  return (
    <>
        {children}

        <Badge onClick={handleDelete} badgeContent='x' sx={{cursor:'pointer',display:'relative',top:'-10px'}} color="warning"  />

    </>

  )
}

export default CloseBtn