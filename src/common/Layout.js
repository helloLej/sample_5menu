import React from 'react'
import { Route } from 'react-router-dom'

const Layout = ({ component: Component, title, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <div className="div_wrap">
          <h1>{title}</h1>
          <Component {...props} />
        </div>
      )}
    />
  )
}

export default Layout
