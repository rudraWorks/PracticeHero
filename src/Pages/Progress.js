import React, { useState, useContext } from 'react'
import TableComp from '../components/TableComp'
import { Box, Fab, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import Sort from '../components/sort/Sort';
import RecordsContext from '../Contexts/Records/RecordsContext';

function Home() {
    const navigate = useNavigate()
    const [showSort, setShowSort] = useState(false)
    const {records} = useContext(RecordsContext)

    return (

        <Box m={1}>
            {
                <div>
                    <Button size='small' onClick={() => setShowSort((prev) => !prev)}>{showSort ? 'Hide Sort' : 'Show Sort'}</Button> &nbsp;&nbsp;
                    <span>{records.length} contests</span>
 
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