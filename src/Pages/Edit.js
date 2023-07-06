import React, { useState, useContext, useEffect } from 'react'
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
import Editor from '../components/Edtior'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RecordsContext from '../Contexts/Records/RecordsContext'
import { useNavigate, useParams} from 'react-router-dom'


function AddContest() {
    const [problems, setProblems] = useState(0)
    const [contestName, setContestName] = useState('')
    const [contestLink, setContestLink] = useState('')
    const [platform, setPlatform] = useState('')
    const [problemsSolved, setProblemsSolved] = useState(0)
    const [performance, setPerformance] = useState(0)

    const [notification, setNotification] = useState('')
    const {records,recordsDispatch} = useContext(RecordsContext)
    const [submitError,setSubmitError] = useState('')
    const navigate = useNavigate()
    const {recordId} = useParams()

    useEffect(()=>{
        for(let {uuid,problems,problemsSolved,contestLink,contestName,performance,platform,reps} of records){
            if(uuid===recordId){
                setProblems(problems)
                setContestLink(contestLink)
                setContestName(contestName)
                setPlatform(platform)
                setProblemsSolved(problemsSolved)
                setPerformance(performance)
            }
        }
    },[recordId]) 

    const handleRecordDelete = () => {
        recordsDispatch({type:'DELETE',uuid:recordId})
        navigate('/')
    }

    const handleRecordSubmit = () => {
        setSubmitError('')
        const date = new Date()
        const reps = 1
        const bookmarked = false
        console.log(contestName, contestLink, platform, problems, problemsSolved, performance)
        if(contestName==='' || contestLink==='' || problems<=0 ){
            return setSubmitError('Input fields can not be empty!')
        }
        recordsDispatch({ type: 'UPDATE',  uuid:recordId , record: { contestName,uuid:recordId, contestLink, platform, problems,problemsSolved, date, reps, bookmarked, performance }})
        navigate('/')
    } 

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

        <Stack mt={3} spacing={2} sx={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }}>

            <Stack direction="row" alignItems="center" gap={1} mb={2}>
                <EmojiEventsIcon sx={{ fontSize: 40 }} />
                <Typography variant='h4'>
                    Edit Contest
                </Typography>
            </Stack>

            {notification && <AlertComp key={Math.random()} message={notification} severity={'warning'} />}

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
            <Editor />
            <p style={{color:'red'}}>{submitError}</p>
            <Button onClick={handleRecordSubmit} variant="contained" color="success"> Save </Button>
            <Button onClick={handleRecordDelete} variant="contained" color="error"> Delete </Button>

        </Stack>
 

    )
}

export default AddContest  