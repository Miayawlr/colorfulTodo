import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './layout.css'
import { Data } from './components/DataProvider'

import { baseRouter } from 'routes/config'
const Layout = () => {
  const [routerList, setRouterList] = useState(baseRouter)

  return (
    <Router>
      <div className={'layout'}>
        <Data>
          <Switch>
            {routerList.map((route, i) => (
              <Route
                key={route + i}
                path={route.path}
                exact={i === 0}
                sensitive={i !== 0}
              >
                <route.component />
                {/* <animated.div style={opactiyT}>
                  <route.component />
                </animated.div> */}
              </Route>
            ))}
          </Switch>
        </Data>
      </div>
    </Router>
  )
}

export default Layout
