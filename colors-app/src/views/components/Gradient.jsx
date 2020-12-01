import React, { useContext } from 'react'
import GradientColor from 'components/GradientColor'
import { DataContext } from 'views/components/DataProvider'

const gradient = () => {
  return {
    position: 'fixed ',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  }
}
const Gradient = () => {
  const colors = useContext(DataContext).toDoList
  const { currentIndex } = useContext(DataContext)
  // console.log(currentIndex)
  return (
    <div style={gradient()}>
      {colors.map((item, i) => (
        <GradientColor
          key={item + i}
          active={i === currentIndex ? true : false}
          colors={item.colors}
        />
      ))}
    </div>
  )
}

export default Gradient
