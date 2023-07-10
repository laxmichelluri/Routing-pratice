// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="logo-and-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-img"
      />
      <h1 className="wave-heading">Wave</h1>
    </div>
    <ul className="nav-items-list">
      <li className="link-items">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li className="link-items">
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>
      <li className="link-items">
        <Link className="route-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
