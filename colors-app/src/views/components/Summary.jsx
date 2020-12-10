import React, { useEffect, useState, useContext } from 'react'
import StyledSummary, { SummaryAvatar } from './style'
import { DataContext } from 'views/components/DataProvider'
const options = {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}
const getDateString = (date) => {
  const d = new Date(date)
  if (`${d}` === 'Invalid Date') return ''
  return new Date(date)
    .toLocaleDateString('zh-cn', options)
    .replace('日', '日, &nbsp;')
}

const Summary = () => {
  const { count } = useContext(DataContext)
  const [date, setDate] = useState(null)
  // const [count, setCount] = useState(null)
  useEffect(() => {
    const time = new Date()
    setDate(time.toISOString())
  }, [])
  return (
    <StyledSummary>
      {/* <Avatar /> */}
      <SummaryAvatar />
      <h2 className={'summary-name'}>Hello,Miaya</h2>
      <p className={'summary-tips'}>
        Looks like feed good.
        <br />
        You have {count} tasks to do today.
      </p>
      <p
        className={'summary-date'}
        dangerouslySetInnerHTML={{ __html: `TODAY:${getDateString(date)}` }}
      ></p>
    </StyledSummary>
  )
}

export default Summary
