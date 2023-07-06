import React, { useState,createContext,useReducer,useContext } from 'react'
import styled from 'styled-components'
import Select from './Select'
import IndividualFilters from './IndividualFilters'
import { Button,Slide,Fade, Box, Paper, Table, TableHead, TableRow, TableCell, TableContainer } from '@mui/material'
import ApplyButton from './ApplyButton'

const Container = styled.div`
  padding:5px;
  margin-bottom:10px;
  display:flex;
  align-items:center;
  flex-wrap:wrap;
` 
export const FilterContext = createContext() 
function reducer(state,action){
    switch(action.type){
      case 'ADD':{
          return {...state,[action.filter]:action.value} 
      } 
      case 'DELETE':{
        return {...state,[action.filter]:null}
      }
      default: return state 
    } 
}
const FilterState = function({children}){
   const [state,dispatch] = useReducer(reducer,{})
   return <FilterContext.Provider value={{state,dispatch}}>{children}</FilterContext.Provider>
}

function Filter() { 

  const [filterArray, setFilterArray] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  return ( 
    <FilterState>
    <Box>
      <Button size='small' onClick={() => setShowFilter((p) => !p)}>{showFilter?'Hide Filters':'Show Filters'}</Button>
      { showFilter && 
        <Slide direction='up' in={showFilter}> 
        <TableContainer content={Paper}>
          <Table aria-label="customized table">
            <TableRow>
              <TableHead>
                <TableCell>
                  <Select setFilterArray={setFilterArray} filterArray={filterArray} />
                </TableCell>
                {
                  filterArray.map((parameter) => {
                    return (
                      <TableCell key={parameter} > 
                         <IndividualFilters setFilterArray={setFilterArray} label={parameter} />
                      </TableCell> 
                    )
                  }) 
                }
                <TableCell> 
                  <ApplyButton filterArray={filterArray} />
                </TableCell>
              </TableHead>
            </TableRow>
          </Table>
        </TableContainer>
        </Slide>
      }
      <br />  
    </Box>
    </FilterState>
  )
}

export default Filter