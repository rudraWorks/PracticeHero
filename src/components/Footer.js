import React from 'react'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Container = styled.div`
    background:#5b6167;    
    margin-top:auto;
    display:flex;
    align-items:center;
    padding:3px;
    @media only screen and (max-width: 600px) {
        flex-direction:column;
    }
`

function Footer() {
    return (
        <Container>
            <Typography sx={{ color: 'lightgray', fontSize: '15px', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}> <EmailIcon /> &nbsp; focussed.biz@gmail.com
            </Typography> &nbsp;&nbsp;
            <Typography sx={{ color: 'lightgray', fontSize: '15px', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}> <CopyrightIcon /> &nbsp; practiceHero.site 2023
            </Typography>
        </Container>
    )
}

export default Footer