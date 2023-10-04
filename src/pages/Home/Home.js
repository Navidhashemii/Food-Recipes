import { useFetch } from '../../hooks/useFetch'
import RecepieList from '../../components/RecepieList'
import './Home.css'


function Home() {

  const {data, isLoading, error} = useFetch('http://localhost:3000/recipes')
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Loading ...</p>}
      {data && <RecepieList recepies={data}/>}

    </div>
  )
}

export default Home