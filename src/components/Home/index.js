import LogoutButton from '../LogoutButton'
import Header from '../Header'

const Home = props => (
  <div>
    <Header />
    <h1>Home Route</h1>
    <LogoutButton info={props} />
  </div>
)

export default Home
