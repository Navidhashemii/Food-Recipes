import { useFetch } from '../../hooks/useFetch'
import './Home.css'


function Home() {

  const {data, isLoading, error} = useFetch('http://localhost:3000/recipes')
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Loading ...</p>}
      {data && <RecepieList/>}

    </div>
  )
}

export default Home