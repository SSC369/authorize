import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Login = props => {
  const onSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 10})
    const {history} = props
    history.replace('/')
  }

  const onCLickButton = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.jwt_token)
    if (response.ok === true) {
      onSuccess(data.jwt_token)
    }
  }
  const token = Cookies.get('jwt_token')
  if (token !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={onCLickButton} type="button">
        Login with sample creds
      </button>
    </div>
  )
}

export default Login
