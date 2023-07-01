import React, { useContext } from 'react'
import TableComp from '../components/TableComp'
import { Button, Box, Skeleton,Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Contexts/User/UserContext';
import HomeInfoComp from '../components/HomeInfoComp';


function Home() {
    const navigate = useNavigate()
    const { user } = useContext(UserContext)

    return (

        // <Box m={3}>
        //     <Skeleton  animation="wave" />
        //     <Skeleton animation="wave" />
        //     <Skeleton animation="wave" />
        //     <Skeleton  animation="wave" />
        //     <Skeleton animation="wave" />
        //     <Skeleton animation="wave" />
        // </Box>

        <Box m={3}>
            {
                user ?
                    <div>
                        <Typography variant='h4' gutterBottom>Welcome {user.name}</Typography>
                        <TableComp />
                        <Button onClick={() => navigate('/addcontest')} variant="contained" color="success" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                            <AddIcon />
                        </Button>
                    </div>
                    :
                    <HomeInfoComp/>
            }

        </Box>


    )
}

export default Home