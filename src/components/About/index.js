import LogoutButton from '../LogoutButton'
import Header from '../Header'

const About = props => (
  <div>
    <Header />
    <h1>About Route</h1>
    <LogoutButton info={props} />
  </div>
)
export default About
