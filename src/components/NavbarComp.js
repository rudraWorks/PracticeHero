import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const Container = styled.div`
    height:50px;
    width:100%;
    // background:aliceblue;
    // border-bottom:1px solid skyblue;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:10px;

    &>a{
        margin:10px;
        font-size:20px;
        font-family:monospace;
    }
`
 
function NavbarComp() {
  return (
    <Container>
        <NavLink to='/' style={({isActive})=>({color:isActive?'blue':'black'})}>Home</NavLink>
        <NavLink to='/progress' style={({isActive})=>({color:isActive?'blue':'black'})} >Progress</NavLink>
    </Container>
  ) 
}

export default NavbarComp