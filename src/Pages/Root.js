import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Navbar from '../components/NavbarComp'
import {Outlet,Link} from 'react-router-dom'

export default function ButtonAppBar() {
 

  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  );
}  
