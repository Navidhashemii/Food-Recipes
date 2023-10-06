import { useState } from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom'

function SearchBar() {

const [term, setTerm] = useState('')
const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    navigate(`/search?q=${term}`)
    
}

  return (
    <div className='searchbar'>

        <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    onChange={(e) => setTerm(e.target.value)} 
                    required
                    placeholder='Search... '
                />

        </form>

    </div>
  )
}

export default SearchBar