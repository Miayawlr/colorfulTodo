import React, { useEffect, useState } from 'react'
import StyledSummary, { SummaryAvatar } from './style'
import { getTodoNumCount } from 'model/mine'
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
  const [date, setDate] = useState(null)
  const [count, setCount] = useState(null)
  const [ava, setAva] = useState(null)
  useEffect(() => {
    const time = new Date()
    setDate(time.toISOString())
  }, [])
  useEffect(() => {
    const getCount = async () => {
      const res = await getTodoNumCount()
      setCount(res.count)
      console.log(res)
    }
    getCount()
  }, [])

  // console.log(count)
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
