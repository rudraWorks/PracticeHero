import React from 'react'
import  {Stack,Typography,Divider} from '@mui/material'

function HomeInfoComp() {
  return (
    <Stack>
        <Typography variant='h3'>Welcome to Contester</Typography>
        <Divider/>
        <br/>
        <Typography variant='h5'>What is Contester?</Typography>
    </Stack> 
  )
}

export default HomeInfoComp