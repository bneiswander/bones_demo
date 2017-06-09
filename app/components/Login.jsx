import React from 'react'
import {login, loginGoogle} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export const Login = ({ login, loginGoogle }) => (
  <div>
    <form onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
    } }>
      <input name="username" />
      <input name="password" type="password" />
      <input type="submit" value="Login" />
    </form>
    <a href='/api/auth/login/facebook'><button>login with facebook</button></a>
  </div>
)

export default connect(
  state => ({}),
  {login, loginGoogle},
)(Login)
