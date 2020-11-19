import React from 'react'
import HeaderBar from 'components/HeaderBar'
import Summary from './components/Summary'
import TodoList from './components/TodoList'
import Gradient from './components/Gradient'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TodoDetails from './components/TodoDetails'
import './layout.css'
import { Data } from './components/DataProvider'
import { useTransition, animated, useSpring } from 'react-spring'
const Layout = () => {
  // const transitions = useTransition(null, {
  //   from: { transform: 'translate3d(0,-100vh,0)' },
  //   // enter: { transition: 'all 0.5s ease' },
  //   // leave: { transition: 'all 0.5s ease' },
  // })
  const opactiyT = useSpring({
    from: { opacity: 0.3, transition: 'all 1s ease' },
    to: { opacity: 1 },
  })
  return (
    <Router>
      <div className={'layout'}>
        <Route path={'/'} exact>
          <animated.div>
            <Data>
              <HeaderBar />
              <Summary />
              <Gradient></Gradient>
              <TodoList />
            </Data>
          </animated.div>
        </Route>
        <Switch>
          <Route sensitive path={'/details'}>
            <animated.div style={opactiyT}>
              <TodoDetails />
            </animated.div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Layout
