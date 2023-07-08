import Navbar from '../components/NavbarComp'
import { Outlet, Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`

  height:100%  ;
  min-height:100vh;
  padding-bottom:5px;
`

export default function ButtonAppBar() {


  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>

  );
}  
