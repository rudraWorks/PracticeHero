import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import InfoIcon from '@mui/icons-material/Info';

const Container = styled.div`
    height:50px;
    width:100%;
    background:darkcyan;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:10px;
        
    // background-color: #124e71;
    // background-image: linear-gradient(45deg, #124e71 0%, #9ab9e4 100%);
    background:#5b6167;    
    border-bottom:1px solid #d0dde3;
    &>a{
        margin-left:20px;
        margin-right:20px;
        font-size:20px;
        font-family:monospace;
        color:white;
        padding:2px;
        text-align:center;
        display:flex;
        align-items:center;
        &>svg{
          transform:scale(1.3);
        }
    }
`

function NavbarComp() {
  return (
    <Container>
      <NavLink to='/' style={({ isActive }) => ({ color: isActive ? 'yellow' : 'lightgray' })}>
        <HomeIcon />
      </NavLink>
      <NavLink to='/about' style={({ isActive }) => ({ color: isActive ? 'yellow' : 'lightgray' })}>
        <InfoIcon />
      </NavLink>
      
      <NavLink to='/progress' style={({ isActive }) => ({ color: isActive ? 'yellow' : 'lightgray' })} >
        <TrendingUpIcon/>
        
      </NavLink>
    </Container>
  )
}

export default NavbarComp