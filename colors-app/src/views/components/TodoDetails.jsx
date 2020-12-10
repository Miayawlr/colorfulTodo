import React, { useState, useEffect, useContext } from 'react'
import { StyledDetails, Details, DetailsBtn } from './todostyle'
import HeaderBar from 'components/HeaderBar'
import { useHistory, useLocation } from 'react-router-dom'
import { useTransition, animated, useSpring } from 'react-spring'
import { getMenuByName, editorStatus, delItem } from 'model/mine'
import { DataContext } from 'views/components/DataProvider'
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
  const [reqStatus, setReqStatus] = useState(false)
  const [delStatus, setDelStatus] = useState(false)
  const { reFetch } = useContext(DataContext)
  const { dispatchFecth } = useContext(DataContext)
  // router push
  const handleGoBack = () => {
    dispatchFecth(!reFetch)
    history.goBack(-1)
  }
  const handlePushEdiotr = () => {
    history.push(`/editor?index=${index}&name=${name}`)
  }

  // 编辑
  useEffect(() => {
    if (id !== null) {
      const editorToDoStatus = async () => {
        let params = {
          id,
          name,
          status: doneStatus,
        }
        await editorStatus(params)
        await setReqStatus((pre) => !pre)
      }
      editorToDoStatus()
    }
  }, [doneStatus, id, name])
  // 删除
  useEffect(() => {
    if (delId !== null) {
      const delDetailsTodo = async () => {
        let params = {
          id: delId,
          name,
        }
        const res = await delItem(params)
        await setDelStatus((pre) => !pre)
        console.log(res)
      }
      delDetailsTodo()
    }
  }, [delId, name])
  // 获取详情
  useEffect(() => {
    const getDetails = async () => {
      const res = await getMenuByName(name)
      setTaskList(res.data[0].tasks)
      setColors(res.data[0].colors)
      setDetails({ ...res.data[0] })
    }
    getDetails()
  }, [name, delStatus, reqStatus])
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
      {/* <animated.div key={index} style={transitions[index]}></animated.div> */}
      <HeaderBar
        onBack={() => {
          handleGoBack()
        }}
        color={'#666'}
        title={details.name}
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
      <DetailsBtn bgColor={colors} onClick={() => handlePushEdiotr()}>
        <i
          className={`fa fa-cube`}
          style={{ fontSize: `${1.1}rem`, fontWeight: 100 }}
        ></i>
      </DetailsBtn>
    </StyledDetails>
  )
}

export default TodoDetails
