import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './layout.css'
import { Data } from './components/DataProvider'
import { useTransition, animated, useSpring } from 'react-spring'
import { baseRouter } from 'routes/config'
const Layout = () => {
  // const transitions = useTransition(null, {
  //   from: { transform: 'translate3d(0,-100vh,0)' },
  //   // enter: { transition: 'all 0.5s ease' },
  //   // leave: { transition: 'all 0.5s ease' },
  // })
  const opactiyT = useSpring({
    from: { opacity: 0.3, transition: 'all .5s ease' },
    to: { opacity: 1 },
  })
  const [routerList, setRouterList] = useState(baseRouter)
  const transaitionsT = useTransition(routerList, (router) => router.key, {
    from: { opacity: 0.3, transition: 'all 1s ease' },
    to: { opacity: 1 },
  })
  return (
    <Router>
      <div className={'layout'}>
        <Data>
          <Switch>
            {/* {baseRouter.map((route, i) => (
              <Route
                key={route + i}
                path={route.path}
                exact={i === 0}
                sensitive={i !== 0}
              >
                <animated.div style={opactiyT}>
                  <route.component />
                </animated.div>
              </Route>
            ))} */}
            {routerList.map((route, i) => (
              <Route
                key={route + i}
                path={route.path}
                exact={i === 0}
                sensitive={i !== 0}
              >
                <animated.div style={opactiyT}>
                  <route.component />
                </animated.div>
              </Route>
            ))}
          </Switch>
        </Data>
      </div>
    </Router>
  )
}

export default Layout
