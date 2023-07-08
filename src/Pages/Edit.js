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
import Editor from '../components/Editor'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RecordsContext from '../Contexts/Records/RecordsContext'
import { useNavigate, useParams} from 'react-router-dom'
import Snackbar from '../components/Snackbar' 


function AddContest() {
    const [problems, setProblems] = useState(0)
    const [contestName, setContestName] = useState('')
    const [contestLink, setContestLink] = useState('')
    const [platform, setPlatform] = useState('')
    const [problemsSolved, setProblemsSolved] = useState(0)
    const [performance, setPerformance] = useState(0)
    const [bookmarked,setBookmarked] = useState(false)
    const [reps,setReps] = useState(0)  
    const [date,setDate] = useState('')
    const [concepts,setConcepts] = useState('')

    const {records,recordsDispatch} = useContext(RecordsContext)
    const navigate = useNavigate()
    const {recordId} = useParams()
    const [showSnack,setShowSnack] = useState(null)


    useEffect(()=>{
        for(let {uuid,problems,concepts,problemsSolved,contestLink,contestName,performance,platform,reps,bookmarked,date} of records){
            if(uuid===recordId){
                setProblems(problems)
                setContestLink(contestLink)
                setContestName(contestName)
                setPlatform(platform)
                setProblemsSolved(problemsSolved)
                setPerformance(performance)
                setBookmarked(bookmarked)
                setReps(reps)
                setDate(date)
                setConcepts(concepts)
            }
        }
    },[recordId]) 

    const handleRecordDelete = () => {
        recordsDispatch({type:'DELETE',uuid:recordId})
        navigate('/')
    }

    const handleRecordSubmit = () => {
        if(contestName==='' || contestLink==='' || problems<=0 ){
            return setShowSnack({message:'Input fields can not be empty!'}) 
        }
        recordsDispatch({ type: 'UPDATE',  uuid:recordId , record: { contestName,concepts,uuid:recordId, contestLink, platform, problems,problemsSolved, date, reps, bookmarked, performance }})
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
                    Edit Contest
                </Typography>
            </Stack>
 

            <TextField id="outlined-basic" value={contestName} onChange={(e) => setContestName(e.target.value)} label="Enter contest name" variant="outlined" />
            <TextField id="outlined-basic" value={contestLink} onChangeCapture={(e) => setContestLink(e.target.value)} label="Enter contest link" variant="outlined" />
            <SelectPlatform defaultValue={platform} setPlatformParent={setPlatform} />
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

            <Editor setConcepts={setConcepts} defaultValue={concepts} />

            { showSnack &&  <Snackbar key={Math.random()} setShowSnack={setShowSnack} message={showSnack.message} /> }
            <Button onClick={handleRecordSubmit} variant="contained" color="success"> Save </Button>
            <Button onClick={handleRecordDelete} variant="contained" color="error"> Delete </Button>

        </Stack>
 

    )
}

export default AddContest  