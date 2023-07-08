import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const Container = styled.div`
    height:50px;
    width:100%;
    background:darkcyan;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:10px;

    background: #02AAB0;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #00CDAC, #02AAB0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #00CDAC, #02AAB0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        

    
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
          transform:scale(1.5);
        }
    }
`

function NavbarComp() {
  return (
    <Container>
      <NavLink to='/' style={({ isActive }) => ({ color: isActive ? 'yellow' : 'white' })}>
        <HomeIcon />
      </NavLink>
      <NavLink to='/progress' style={({ isActive }) => ({ color: isActive ? 'yellow' : 'white' })} >
        <TrendingUpIcon/>
        
      </NavLink>
    </Container>
  )
}

export default NavbarComp