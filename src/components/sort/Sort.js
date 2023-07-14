import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Radio, RadioGroup, Button } from '@mui/material'
import RecordsContext from '../../Contexts/Records/RecordsContext'

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  background:aliceblue;
  padding:10px;
  padding:10px;
  margin-bottom:4px;
  border:1px solid #c3d9e1;
  border-radius:5px;
`
const Align = styled.div`
  display:flex;
  align-items:center;
`
function Sort({ showSort, setShowSort }) {
  const [radioValue, setRadioValue] = useState('none')
  const { records, recordsDispatch } = useContext(RecordsContext)

  const sortHandler = () => {
    recordsDispatch({ type: radioValue })
    recordsDispatch({ type: 'LOAD' })
  }

  if (!showSort) return null

  return (
    <Container>
      <RadioGroup value={radioValue} row onChange={(e) => setRadioValue(e.target.value)}>
        <Align>Contest  <Radio size='small'  color='success' value="contest" /></Align>
        <Align>Platform <Radio size='small' color='success' value="platform" /></Align>
        <Align>Date <Radio size='small' color='success' value="date" /></Align>
        <Align>Done <Radio size='small' color='success' value="done" /></Align>
        <Align>Performance <Radio size='small' color='success' value="performance" /></Align>
        <Align>Bookmark <Radio size='small' color='success' value="bookmark" /></Align>
      </RadioGroup>
      <Button style={{ marginLeft: 'auto' }} onClick={sortHandler} variant='contained' color='success' size='small' >Apply</Button>

    </Container>
  )
}

export default Sort