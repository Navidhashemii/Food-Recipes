import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <Link to='/' className='brand'>Food  Recepies</Link>
            <Link to='/create' className='' >Create Recepie</Link>

        </nav>
    </div>
  )
}

export default Navbar