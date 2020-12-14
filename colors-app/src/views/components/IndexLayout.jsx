import React from 'react'
import HeaderBar from 'components/HeaderBar'
import Summary from './Summary'
import TodoList from './TodoList'
import Gradient from './Gradient'


const IndexLayout = () => {
  return (
    <React.Fragment>
      <HeaderBar color={'#fff'} />
      <Summary />
      <Gradient></Gradient>
      <TodoList />
    </React.Fragment>
  )
}

export default IndexLayout
