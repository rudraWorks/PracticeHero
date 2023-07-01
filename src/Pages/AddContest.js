import React, { useState } from 'react'
import {
    Typography,
    TextField,
    Slider,
    Stack,
    Rating,
    Button
} from '@mui/material'
import SelectComp from '../components/SelectComp'
import AlertComp from '../components/AlertComp'
import Editor from '../components/Edtior'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function AddContest() {
    const [problems, setProblems] = useState(4)
    const [notification, setNotification] = useState('')

    const problemsHandler = (e) => {
        if (e.target.value === '') {
            setProblems(0)
            return
        }
        if (parseInt(e.target.value) > 10) {
            setProblems(10)
            setNotification('Number of problems can not be greater than 10!')
            return
        }
        if (parseInt(e.target.value) < 0) {
            setProblems(0)
            setNotification('Number of problems can not be less than 1!')
            return
        }

        setNotification('')
        setProblems(parseInt(e.target.value))
    }

    return (

        <Stack spacing={2} sx={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }}>

            <Stack direction="row" alignItems="center" gap={1} mb={2}>
                <EmojiEventsIcon sx={{ fontSize: 40 }} />
                <Typography variant='h4'>
                    Add Contest
                </Typography>
            </Stack>

            {notification && <AlertComp key={Math.random()} message={notification} severity={'warning'} />}

            <TextField id="outlined-basic" label="Enter contest name" variant="outlined" />
            <TextField id="outlined-basic" label="Enter contest link" variant="outlined" />
            <SelectComp />
            <TextField onInput={problemsHandler} value={`${problems}`} id="outlined-basic" type='number' label="Total number of problems" variant="outlined" />
            <Typography>Number of problems solved</Typography>
            <Slider
                aria-label="Temperature"
                defaultValue={3}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={problems}
                disabled={problems <= 0 ? true : false}
            />
            <Typography >Rate your performance</Typography>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} size='large' />
            <Typography >Write the concepts you learnt</Typography>
            <Editor />

            <Button variant="contained" color="success"> Save </Button>
        </Stack>


    )
}

export default AddContest