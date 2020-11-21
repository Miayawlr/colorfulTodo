import React, { useState, useEffect } from 'react'
import { StyledDetails, Details } from './todostyle'
import HeaderBar from 'components/HeaderBar'
import { useHistory, useLocation } from 'react-router-dom'
import { getTodoByName } from 'model/mine'
import { useTransition, animated, useSpring } from 'react-spring'
import { editorTodoStatus, delTodo } from 'model/mine'
const useQuery = () => new URLSearchParams(useLocation().search)

const TodoDetails = ({ todoItem }) => {
  const query = useQuery()
  const name = query.get('name')
  const index = query.get('index')
  const history = useHistory()
  const [details, setDetails] = useState({})
  const [taskList, setTaskList] = useState([])
  const [colors, setColors] = useState([])
  const [id, setId] = useState(null)
  const [delId, setDelId] = useState(null)
  const [doneStatus, setDoneStatus] = useState(null)
  const [status, setStatus] = useState(false)
  const handleGoBack = () => {
    history.push('/')
  }

  // 获取详情
  useEffect(() => {
    const getDetails = async () => {
      const res = await getTodoByName(name)
      setTaskList(res.tasks)
      setDetails({ ...res })
      setColors(res.colors)
      console.log(res)
    }

    getDetails()
  }, [name])
  // 编辑
  useEffect(() => {
    if (id !== null) {
      const editorStatus = async () => {
        let parmas = {
          id,
          name,
          status: doneStatus,
        }
        console.log(parmas)
        const res = await editorTodoStatus(JSON.stringify(parmas))
      }
      editorStatus()
    }
  }, [doneStatus, id, name])
  // 删除
  useEffect(() => {
    if (delId !== null) {
      const delDetailsTodo = async () => {
        let parmas = {
          id: delId,
          name,
        }
        const res = await delTodo(JSON.stringify(parmas))
        console.log(res)
      }
      delDetailsTodo()
    }
  }, [delId, name])
  const handleChangeStatus = (status, id) => {
    setDoneStatus(status)
    setId(id)
  }
  const handleRemoveTask = (id) => {
    setDelId(id)
  }
  const transitions = useTransition(3, {
    transform: 'all 0.5s ease',
  })
  return (
    <StyledDetails>
      <animated.div key={index} style={transitions[index]}>
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
          onChange={(status, id) => handleChangeStatus(status, id)}
          style={{ boxShadow: 'none' }}
          todoIcon={details.icon}
          todoIconColor={colors[0]}
          title={details.name}
          tasks={taskList}
          srIcon={false}
          onRemove={(v) => handleRemoveTask(v)}
        ></Details>
      </animated.div>
    </StyledDetails>
  )
}

export default TodoDetails
