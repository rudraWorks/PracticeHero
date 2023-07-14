import React, { useState } from 'react'
import TableComp from '../components/TableComp'
import { Box, Fab, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import Sort from '../components/sort/Sort';

function Home() {
    const navigate = useNavigate()
    const [showSort, setShowSort] = useState(false)

    return (

        <Box m={1}>
            {
                <div>
                    <Button size='small' onClick={() => setShowSort((prev) => !prev)}>{showSort ? 'Hide Sort' : 'Show Sort'}</Button>

                    <Sort setShowSort={setShowSort} showSort={showSort} />

                    <TableComp setShowSort={setShowSort} showSort={showSort} />
                    <Fab color="secondary" aria-label="add" onClick={() => navigate('addcontest')} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                        <AddIcon />
                    </Fab>
                </div>
            }

        </Box>


    )
}

export default Home