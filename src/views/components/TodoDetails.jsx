import React, { useState, useEffect } from 'react'
import { StyledDetails, Details } from './todostyle'
import HeaderBar from 'components/HeaderBar'
import { useHistory, useLocation } from 'react-router-dom'
import { getTodoByName } from 'model/mine'

const useQuery = () => new URLSearchParams(useLocation().search)

const TodoDetails = ({ todoItem }) => {
  const query = useQuery()
  const name = query.get('name')
  const history = useHistory()
  const [index, setIndex] = useState(0)
  const [details, setDetails] = useState({})
  const [taskList, setTaskList] = useState([])
  const [colors, setColors] = useState([])
  const handleGoBack = () => {
    history.push('/')
  }
  useEffect(() => {
    const getDetails = async () => {
      const res = await getTodoByName(name)
      setTaskList(res.tasks)
      setDetails({ ...res })
      setColors(res.colors)
    }
    getDetails()
  }, [name])

  // console.log(details)
  return (
    <StyledDetails>
      <HeaderBar
        onBack={() => {
          handleGoBack()
        }}
        color={'#666'}
        title={'toDay'}
        leftIcon={'chevron-left'}
        rightIcon={'ellipsis-v'}
      />
      <Details
        style={{ boxShadow: 'none' }}
        todoIcon={details.icon}
        todoIconColor={colors[0]}
        title={details.name}
        tasks={taskList}
        srIcon={false}
        onRemove={(v) => console.log(v)}
      ></Details>
    </StyledDetails>
  )
}

export default TodoDetails
