import React from 'react'
import TableComp from '../components/TableComp'
import {Box, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()

    return ( 

        <Box m={1}>
            {
                <div>
                    <TableComp/>
                    <Fab color="secondary" aria-label="add" onClick={() => navigate('/addcontest')} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                        <AddIcon />
                    </Fab>
                </div>
            }

        </Box>


    )
}

export default Home