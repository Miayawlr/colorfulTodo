import React, { useContext, useMemo, useState, useRef, useEffect } from 'react'
import { DataContext } from 'views/components/DataProvider'
import { useHistory, useLocation } from 'react-router-dom'
import { StyledEditorContainer, EditorHeader, EdiotrBtn } from './todostyle'
import { putTodo } from 'model/mine'
const useQuery = () => new URLSearchParams(useLocation().search)
const TodoEditor = () => {
  const query = useQuery()
  const name = query.get('name')
  const index = query.get('index')
  const editorItem = useContext(DataContext).toDoList[index] || []
  const [menu, setMenu] = useState('') //文本todoArea
  const textRef = useRef(null)
  const [goBack, setGoBack] = useState(false)
  const history = useHistory()
  const icon = useMemo(() => {
    return editorItem.icon
  }, [editorItem.icon])
  const colors = useMemo(() => {
    return editorItem.colors
  }, [editorItem.colors])
  useEffect(() => {
    if (menu) {
      const putToDoMenu = async () => {
        let params = {
          name,
          menu,
        }
        const res = await putTodo(JSON.stringify(params))
        console.log(res)
      }
      putToDoMenu()
      setGoBack(true)
    }
    textRef.current.value = ''
  }, [menu, name])

  useEffect(() => {
    if (goBack) {
      history.goBack(1)
    }
  }, [goBack, history])
  const handlePutEditor = () => {
    const val = textRef.current.value
    if (val.trim() !== '') {
      setMenu(val)
    }
  }
  return (
    <React.Fragment>
      <EditorHeader
        onBack={() => {
          history.goBack(1)
        }}
        title={'New Task'}
        leftIcon={'close'}
        rightIcon={'ellipsis-v'}
      ></EditorHeader>

      <StyledEditorContainer>
        <section>
          <div className={'todo-editing-head'}>
            <p>What tasks are you planning to perform?</p>
          </div>
          <div className={'todo-editing-body'}>
            <textarea rows={3} ref={textRef}></textarea>
            <div className={'sapcer'}></div>
            <p className={'todo-editing-meta'}>
              <i className={`fa fa-${icon}`}></i>
              {name}
            </p>
            <p className={'todo-editing-meta'}>
              <i className={'fa fa-calendar'}></i>
              ToDay
            </p>
          </div>
        </section>
      </StyledEditorContainer>
      <EdiotrBtn
        shape={'rect'}
        bgColor={colors}
        onClick={() => handlePutEditor()}
      >
        <i
          className={`fa fa-cube cube-add`}
          style={{ fontSize: `${1.1}rem`, fontWeight: 100 }}
        ></i>
      </EdiotrBtn>
    </React.Fragment>
  )
}

export default TodoEditor
