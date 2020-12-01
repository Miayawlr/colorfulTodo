import React from 'react'
import { Route } from 'react-router-dom'

const RouterWarpper = (route) => {
  console.log(route)
  return (
    // routes={route.routes}
    <Route
      path={route.path}
      render={(props) => <route.component {...props} />}
    />
  )
}

export default RouterWarpper
