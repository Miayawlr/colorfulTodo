import React, { useState, useRef, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import StyledTodoContainer, { ToDo } from './todostyle'
import { DataContext } from 'views/components/DataProvider'

const translateEl = (currentIndex) => {
  return {
    transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
  }
}
const TodoList = () => {
  let touch = {} //接触距离
  const containerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const val = useContext(DataContext)
  // useEffect(() => {
  //   let touch = {}
  //   const el = containerRef.current
  //   // console.log(el)
  //   el.addEventListener('touchstart', (evt) => {
  //     touch.startX = evt.touches[0].clientX
  //     touch.endX = 0
  //   })
  //   el.addEventListener('touchmove', (evt) => {
  //     touch.endX = evt.touches[0].clientX
  //   })

  //   el.addEventListener('touchend', (evt) => {
  //     if (!touch.endX || Math.abs(touch.endX - touch.startX) < 10) {
  //       return
  //     }
  //     if (touch.endX < touch.startX) {
  //       //    console.log('next')
  //       if (currentIndex < val.length) {
  //         setCurrentIndex(currentIndex + 1)
  //         console.log(currentIndex + 'next')
  //       }
  //     } else {
  //       // console.log('pre')
  //       if (currentIndex > 0) {
  //         setCurrentIndex(currentIndex - 1)
  //         console.log(currentIndex + 'pre')
  //       }
  //     }
  //   })
  // }, [currentIndex, val.length])
  const handleTouchStart = (evt) => {
    console.log(evt.touches[0].clientX)
    touch.startX = evt.touches[0].clientX
    touch.endX = 0
  }
  const handleTouchMove = (evt) => {
    touch.endX = evt.touches[0].clientX
  }
  const handleTouchEnd = (evt) => {
    if (!touch.endX || Math.abs(touch.endX - touch.startX) < 10) {
      return
    }
    if (touch.endX < touch.startX) {
      if (currentIndex < val.length) {
        setCurrentIndex(currentIndex + 1)
        console.log(currentIndex + 'next')
      }
    } else {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
        console.log(currentIndex + 'pre')
      }
    }
  }
  return (
    <React.Fragment>
      {/* selected={!!selected} */}
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
