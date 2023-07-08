import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
    Typography,
    TextField,
    Slider,
    Stack,
    Rating,
    Button,
} from '@mui/material'
import SelectPlatform from '../components/SelectPlatform'
import AlertComp from '../components/AlertComp'
import Editor from '../components/Editor'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RecordsContext from '../Contexts/Records/RecordsContext'
import { useNavigate } from 'react-router-dom'
import Snackbar from '../components/Snackbar'


function AddContest() {
    const [problems, setProblems] = useState(4)
    const [contestName, setContestName] = useState('')
    const [contestLink, setContestLink] = useState('')
    const [platform, setPlatform] = useState('')
    const [problemsSolved, setProblemsSolved] = useState(0)
    const [performance, setPerformance] = useState(0) 
    const [concepts,setConcepts] = useState('')

  
    const {recordsDispatch } = useContext(RecordsContext)
    const [showSnack, setShowSnack] = useState(null)
    const navigate = useNavigate()

    const handleRecordSubmit = () => {
        setShowSnack(null)
        const date = new Date()
        const reps = 1
        const bookmarked = false
        console.log(contestName, contestLink, platform, problems, problemsSolved, performance)
        if(contestName==='' || contestLink==='' || problems<=0 ){
            return setShowSnack({message:'Input fields can not be empty!'})
        }
        recordsDispatch({ type: 'INSERT', record: { contestName,uuid:uuidv4(), contestLink, platform, problems,problemsSolved, date, reps, bookmarked, performance, concepts } })
        navigate('/')
    }

    const problemsHandler = (e) => {
        setShowSnack(null)
        if (e.target.value === '') {
            setProblems(0)
            return
        }
        if (parseInt(e.target.value) > 10) {
            setProblems(10)
            setShowSnack({message:'Number of problems can not be more than 10!'}) 
            return
        }
        if (parseInt(e.target.value) < 0) {
            setProblems(0)
            setShowSnack({message:'Number of problems can not be less than 1!'}) 
            return
        }
        setProblems(parseInt(e.target.value))
        setProblemsSolved(0)
    }

    return (

        <Stack mt={3} spacing={2} sx={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }}>

            <Stack direction="row" alignItems="center" gap={1} mb={2}>
                <EmojiEventsIcon sx={{ fontSize: 40 }} />
                <Typography variant='h4'>
                    Add Contest
                </Typography>
            </Stack>
 


            <TextField id="outlined-basic" value={contestName} onChange={(e) => setContestName(e.target.value)} label="Enter contest name" variant="outlined" />

            <TextField id="outlined-basic" value={contestLink} onChangeCapture={(e) => setContestLink(e.target.value)} label="Enter contest link" variant="outlined" />

            <SelectPlatform setPlatformParent={setPlatform} />

            <TextField onInput={problemsHandler} value={`${problems}`} id="outlined-basic" type='number' label="Total number of problems" variant="outlined" />
 
            <Typography>Number of problems solved</Typography>

            <Slider
                defaultValue={problemsSolved}
                valueLabelDisplay="auto"
                value={problemsSolved}
                step={1}
                marks
                min={0}
                onChange={(e) => setProblemsSolved(e.target.value)}
                max={problems}
                disabled={problems <= 0 ? true : false}
            />

            <Typography >Rate your performance</Typography>

            <Rating name="half-rating" value={performance} defaultValue={performance} onChange={(e) => setPerformance(parseInt(e.target.value))} size='large' sx={{ width: 'fit-content' }} />

            <Typography >Write the concepts you learnt</Typography>

            <Editor setConcepts={setConcepts} />

            { showSnack &&  <Snackbar key={Math.random()} setShowSnack={setShowSnack}  message={showSnack.message} /> }
            <Button onClick={handleRecordSubmit} variant="contained" color="success"> Save </Button>
        </Stack>


    )
}

export default AddContest 