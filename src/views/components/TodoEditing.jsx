import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from 'views/components/DataProvider'
import { useHistory, useLocation } from 'react-router-dom'
import { StyledEditorContainer, EditorHeader, EdiotrBtn } from './todostyle'

const useQuery = () => new URLSearchParams(useLocation().search)
const TodoEditor = () => {
  const query = useQuery()
  const name = query.get('name')
  const index = query.get('index')
  const editorItem = useContext(DataContext).toDoList[index]
  const [colors, setColors] = useState(['#ff6262', '#ffa947'])
  // const colors = editorItem['colors']
  // [index].colors
  const history = useHistory()
  console.log(colors)

  // useEffect(() => {
  //   setColors(editorItem.colors)
  // }, [DataContext])
  console.log(colors)
  return (
    <React.Fragment>
      <EditorHeader
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
            <textarea rows={3}></textarea>
            <div className={'sapcer'}></div>
            <p className={'todo-editing-meta'}>
              <i className={'fa fa-user'}></i>
              {name}
            </p>
            <p className={'todo-editing-meta'}>
              <i className={'fa fa-calendar'}></i>
              ToDay
            </p>
          </div>
        </section>
      </StyledEditorContainer>
      <EdiotrBtn shape={'rect'} bgColor={colors}>
        <i
          className={`fa fa-cube cube-add`}
          style={{ fontSize: `${1.1}rem`, fontWeight: 100 }}
        ></i>
      </EdiotrBtn>
    </React.Fragment>
  )
}

export default TodoEditor
