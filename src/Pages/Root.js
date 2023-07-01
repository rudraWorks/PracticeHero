import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '../components/NavbarComp'
import {Outlet,Link} from 'react-router-dom'


export default function ButtonAppBar() {
 

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" color='primary'> 
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            <Link style={{textDecoration:'none',color:'white'}} to='/'> Leetcode Contest</Link>
          </Typography>
          <Menu />
        </Toolbar>
      </AppBar>   
      <Box sx={{padding:'10px',margin:'5px'}}>
        <Outlet/>
      </Box>
    </Box>
  );
}  
