import React, { useState, useEffect, useContext } from 'react'
import { StyledDetails, Details, DetailsBtn } from './todostyle'
import HeaderBar from 'components/HeaderBar'
import Modal from 'components/Modal'
import { useHistory, useLocation } from 'react-router-dom'
import { getMenuByName, editorStatus, delItem } from 'model/mine'
import { DataContext } from 'views/components/DataProvider'
import { useSpring, useTransition, animated } from 'react-spring'
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
  const [shoId, setShoId] = useState(null)
  const [modalShow, setModalShow] = useState(false) // modal
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
    setShoId(id)
    setModalShow(true)
  }
  // animated
  const EditorAnimated = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <>
      <StyledDetails>
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
        {modalShow && (
          <Modal
            onClose={() => {
              setModalShow((pre) => !pre)
            }}
            onConfirm={() => {
              setModalShow((pre) => !pre)
              setDelId(shoId)
            }}
          >
            <p className={'modal-tips'}> 确认要删除吗?</p>
          </Modal>
        )}
      </StyledDetails>
      <style jsx="true">{`
        .modal-tips {
          line-height: 4.5rem;
          text-align: center;
          color: #3c3c3c;
          font-size: 0.75rem;
        }
      `}</style>
    </>
  )
}

export default TodoDetails
