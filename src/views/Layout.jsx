import React from 'react'
import HeaderBar from 'components/HeaderBar'
import Summary from './components/Summary'
import TodoList from './components/TodoList'
import Gradient from './components/Gradient'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TodoDetails from './components/TodoDetails'
import './layout.css'
import { Data } from './components/DataProvider'
const Layout = () => {
  return (
    <Router>
      <div className={'layout'}>
        <Route path={'/'} exact>
          <div>
            <Data>
              <HeaderBar />
              <Summary />
              <Gradient></Gradient>
              <TodoList />
            </Data>
          </div>
        </Route>
        <Switch>
          {/* <Route path={'/details/:index'} component={TodoDetails} /> */}
          {/* path={'/details'} */}
          <Route sensitive path={'/details'}>
            <TodoDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Layout
