import React from 'react'
import { Typography, Box } from '@mui/material'
import {useWindowWidth} from '@react-hook/window-size'


function About() {
  const width = useWindowWidth()
  let fontSize = '110px'
  let fs2 = '60px'
  let fs3 = '30px' 
  if (width <= 1260){
    fontSize = '100px'
    fs2='55px'
    fs3='25px'
  }
  if (width <= 1200){
    fontSize = '90px'
    fs2='50px'
    fs3='30px'
  }

  if (width <= 1150){
    fontSize = '80px'
    fs2='40px'
    fs3='25px'
  }

  if (width<=1030){
    fontSize = '70px'
    fs2='30px'
    fs3='22px'
  }

  if (width<=800){
    fontSize = '50px'
    fs2='30px'
    fs3='20px'
  }
  // else fontSize='40px'

  return (
    <Box sx={{ textAlign: 'center' }} mt={4}> 
      {/* {width + '-' + fontSize+"-"+fs2+'-'+fs3} */}
      <Typography variant='h1' sx={{ fontWeight: 'bolder', fontSize ,WebkitTextStroke:'none',color:'gray' }} gutterBottom> Measure it to master it! </Typography>
      <Typography variant='h3' sx={{fontSize:fs2}} gutterBottom>Track your daily progress with <b style={{WebkitTextStroke:'1px blue',color:'skyblue'}}>PracticeHero</b></Typography>
      <Typography variant='h4' sx={{fontSize:fs3}}>The best platform to track your progress in virtual contests</Typography>
    </Box>
  )
}
 
export default About