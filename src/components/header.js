import { Link } from 'react-router-dom'
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/list'>list</Link></li>
        <li><Link to='/match'>match</Link></li>
      </ul>
    </nav>
  </header>
)
