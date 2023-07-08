import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StyledComp from 'styled-components'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LinkIcon from '@mui/icons-material/Link';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Rating from '@mui/material/Rating'
import Switch from '@mui/material/Switch'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import moment from 'moment'
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'; import TerminalIcon from '@mui/icons-material/Terminal';
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react'
import RecordsContext from '../Contexts/Records/RecordsContext';
import Snackbar from './Snackbar';
import Dialog from './Dialog'
import Link from '@mui/material/Link'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        paddingTop: '4px',
        paddingBottom: '4px'
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



function createData(contestName, contestLink, platform, date, done, performance, concepts, bookmarked, id, edit) {
    return { contestName, contestLink, platform, date, done, performance, concepts, bookmarked, id, edit };
}



const CenterCell = StyledComp.div`
    display:flex; 
    align-items:center; 
`

export default function CustomizedTables() {
    const navigate = useNavigate()
    const { records, recordsDispatch } = useContext(RecordsContext)
    const [showDialog, setShowDialog] = useState(false)
    const [concepts, setConcepts] = useState('<p><p>')

    const [showSnack, setShowSnack] = useState(null)

    const bookmarkHandler = (checked, uuid) => {
        recordsDispatch({ type: 'BOOKMARK', checked, uuid })
        setShowSnack({ message: 'Changes saved' })
    }
    const rows = [];
    for (let { uuid, contestName, contestLink, concepts, platform, date, problems, problemsSolved, performance, bookmarked } of records) {
        rows.push(createData(
            contestName,
            <Link href={contestLink} target="__blank">Link</Link>,
            <Chip size='small' label={platform} color="primary" variant="outlined" />,
            moment(date).format('lll'),
            <Tooltip title={`${problemsSolved}/${problems}`}>
                <LinearProgress sx={{ height: '10px', borderRadius: '5px' }} variant='determinate' value={(problemsSolved * 100) / problems} />
            </Tooltip>,
            <Rating name="read-only" value={performance} readOnly />,
            <Button size='small' variant='contained' onClick={() => handleDialog(concepts)} ><ArrowOutwardIcon /></Button>,
            <Switch defaultChecked={bookmarked} onChange={(e) => bookmarkHandler(e.target.checked, uuid)} />,
            uuid,
            <Button size='small' variant='contained' color='secondary' ><EditIcon /></Button>,

        ))
    }
    const handleDialog = (concepts) => {
        setConcepts(concepts)
        setShowDialog(true)
    }
    return (

        <TableContainer component={Paper} variant='outlined' sx={{ padding: '5px' }}>
            <Typography variant='h6'>{records.length} {records.length > 1 ? 'contests' : 'contest'} </Typography>

            <Table sx={{ minWidth: 1300 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell ><CenterCell><EmojiEventsIcon />&nbsp;Contest Name</CenterCell></StyledTableCell>
                        <StyledTableCell ><CenterCell><LinkIcon />&nbsp;Contest Link</CenterCell></StyledTableCell>
                        <StyledTableCell ><CenterCell><TerminalIcon />&nbsp;Platform</CenterCell></StyledTableCell>
                        <StyledTableCell ><CenterCell><CalendarMonthIcon /> &nbsp;Date </CenterCell> </StyledTableCell>
                        <StyledTableCell ><CenterCell><TaskAltIcon /> &nbsp;Done</CenterCell></StyledTableCell>
                        <StyledTableCell ><CenterCell><StarBorderIcon />&nbsp;Performance?</CenterCell></StyledTableCell>
                        <StyledTableCell ><CenterCell><TextSnippetIcon />&nbsp;Concepts Learnt</CenterCell></StyledTableCell>
                        <StyledTableCell><CenterCell><BookmarkIcon />&nbsp;Bookmark</CenterCell></StyledTableCell>
                        <StyledTableCell><CenterCell><EditIcon />&nbsp;Edit</CenterCell></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                                {row.contestName}
                            </StyledTableCell>
                            <StyledTableCell>{row.contestLink}</StyledTableCell>
                            <StyledTableCell>{row.platform}</StyledTableCell>
                            <StyledTableCell>{row.date}</StyledTableCell>
                            <StyledTableCell>{row.done}</StyledTableCell>
                            <StyledTableCell>{row.performance}</StyledTableCell>
                            <StyledTableCell>{row.concepts}</StyledTableCell>
                            <StyledTableCell>{row.bookmarked}</StyledTableCell>
                            <StyledTableCell onClick={() => navigate(`/edit/${row.id}`)}>{row.edit}</StyledTableCell>

                        </StyledTableRow>
                    ))}

                </TableBody>
            </Table>
            {
                rows.length === 0 && <Typography variant='h4' sx={{ margin: '30px', textAlign: 'center' }} gutterBottom>You have not given any contest!</Typography>
            }
            {showDialog && <Dialog concepts={concepts} setShowDialog={setShowDialog} />}
            {showSnack && <Snackbar key={Math.random()} setShowSnack={setShowSnack} message={showSnack.message} />}
        </TableContainer>
    );
} 