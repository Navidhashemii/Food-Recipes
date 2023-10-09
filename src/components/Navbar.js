import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import './Navbar.css'
import { useTheme } from '../hooks/useTheme'


function Navbar() {

  const {color, changeColor} = useTheme()
  
  return (
    <div className='navbar' style={{background: color}}>
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