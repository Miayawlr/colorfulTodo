import React, { useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import StyledTodoContainer, { ToDo } from './todostyle'
import { NEXT, PRE, DataContext } from 'views/components/DataProvider'

const translateEl = (currentIndex) => {
  return {
    transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
  }
}
const TodoList = () => {
  let touch = {} //接触距离
  const containerRef = useRef(null)
  const { currentIndex } = useContext(DataContext)
  const { dispatch } = useContext(DataContext)
  const val = useContext(DataContext).toDoList
  const handleTouchStart = (evt) => {
    touch.startX = evt.touches[0].clientX
    touch.endX = 0
  }
  const handleTouchMove = (evt) => {
    touch.endX = evt.touches[0].clientX
  }
  const handleTouchEnd = (evt) => {
    console.log('test')
    if (!touch.endX || Math.abs(touch.endX - touch.startX) < 10) {
      return
    }
    if (touch.endX < touch.startX) {
      if (currentIndex < val.length - 1) {
        dispatch({ type: NEXT, index: currentIndex + 1 })
      }
    } else {
      if (currentIndex > 0) {
        dispatch({ type: PRE, index: currentIndex - 1 })
      }
    }
  }

  // animation
  const transitions = useTransition(val, (item) => item.key, {
    from: { transition: 'all 0.5s ease' },
    enter: { transition: 'all 0.5s ease' },
    leave: { transition: 'all 0.5s ease' },
  })

  return (
    <React.Fragment>
      <StyledTodoContainer
        ref={containerRef}
        onTouchStart={(evt) => handleTouchStart(evt)}
        onTouchMove={(evt) => handleTouchMove(evt)}
        onTouchEnd={(evt) => handleTouchEnd(evt)}
      >
        <ul style={{ width: `${300}%` }}>
          {val.map((item, i) => (
            <li
              key={item + i}
              className={'todo'}
              style={translateEl(currentIndex)}
            >
              <Link
                style={{ width: '100%', textDecoration: 'none' }}
                to={{
                  pathname: '/details',
                  search: `?index=${i}&name=${item.name}`,
                }}
              >
                <ToDo
                  todoIcon={item.icon}
                  todoIconColor={item['colors'][0]}
                  title={item.name}
                  tasks={item.tasks}
                ></ToDo>
              </Link>
            </li>
          ))}
        </ul>
      </StyledTodoContainer>
    </React.Fragment>
  )
}

export default TodoList
