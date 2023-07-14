import Navbar from '../components/NavbarComp'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
 
const Container = styled.div`
  height:100%;
  min-height:100vh;
  display:flex;
  flex-direction:column;
`

export default function ButtonAppBar() {


  return (
    <Container>
      <Navbar />
      <Outlet />
      <br/>
      <Footer/>
    </Container>
 
  );
}  
