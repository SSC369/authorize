import Cookies from 'js-cookie'

const LogoutButton = props => {
  const {info} = props
  const doLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = info
    history.replace('/login')
  }

  return (
    <button onClick={doLogout} type="button">
      Logout
    </button>
  )
}

export default LogoutButton
