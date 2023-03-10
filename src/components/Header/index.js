import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <ul className="list">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
    </ul>
  </nav>
)

export default Header
