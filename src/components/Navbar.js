import { Link } from 'react-router-dom'
import './Navbar.css'
import SearchBar from './SearchBar'


function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <Link to='/' className='brand'>Food  Recipes</Link>
            <div className='nav-right'>
              <SearchBar/>
              <Link to='/create' >Create Recipe</Link>
            </div>
            

        </nav>
    </div>
  )
}

export default Navbar