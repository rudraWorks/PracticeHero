import React, { useContext } from 'react'
import TableComp from '../components/TableComp'
import { Button, Box, Skeleton, Typography, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Contexts/User/UserContext';
import HomeInfoComp from '../components/HomeInfoComp';
import FilterComp from '../components/Filter/Filter'
import RecordsContext from '../Contexts/Records/RecordsContext';

function Home() {
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const { records } = useContext(RecordsContext)

    return (

        // <Box m={3}>
        //     <Skeleton  animation="wave" />
        //     <Skeleton animation="wave" />
        //     <Skeleton animation="wave" />
        //     <Skeleton  animation="wave" />
        //     <Skeleton animation="wave" />
        //     <Skeleton animation="wave" />
        // </Box>

        <Box m={1}>
            {
                // user ?
                <div>
                    <FilterComp />
                    <TableComp records={records} />
                    <Fab color="secondary" aria-label="add" onClick={() => navigate('/addcontest')} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                        <AddIcon />
                    </Fab>
                </div>
                // :
                // <HomeInfoComp/>
            }

        </Box>


    )
}

export default Home