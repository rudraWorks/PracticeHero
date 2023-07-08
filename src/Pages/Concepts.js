import React, { useContext, useState, useEffect} from 'react'
import RecordsContext from '../Contexts/Records/RecordsContext'
import { useParams } from 'react-router-dom'
import HTMLparser from 'html-react-parser'
import { Paper, Typography, Divider } from '@mui/material'
import moment from 'moment'

function Concepts() {

    const { records } = useContext(RecordsContext)
    const {recordId} = useParams() 
    const [record,setRecord] = useState(null)

    useEffect(()=>{
        let arr = records.filter((r)=>r.uuid===recordId)
        setRecord(arr[0])
    },[recordId])
 
    return (

        <Paper sx={{padding:'10px',marginTop:'20px'}} variant='outlined'>  
            
            <Typography variant='h4' gutterBottom>{record?.contestName}</Typography> 
            <Typography>{moment(record?.date).format('lll')}</Typography>
            <Divider/> 
            { 
                HTMLparser(record?.concepts || 'no concepts saved!')
            }
        </Paper>
    )
}

export default Concepts