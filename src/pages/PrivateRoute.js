import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUserContext } from '../context/user_context'

// rest operator
const PrivateRoute = ({ children, ...rest }) => {
  // console.log(children)
  // console.log(rest)
  const { myUser } = useUserContext()
  // spread operator
  return (
    <Route
      {...rest}
      render={() => {
        return myUser ? children : <Redirect to='/'></Redirect>
      }}
    ></Route>
  )
}
export default PrivateRoute
