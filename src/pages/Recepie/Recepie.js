import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import './Recepie.css'
import { useTheme } from '../../hooks/useTheme'


function Recepie() {
  const {id} = useParams()
  const {data : recepie, isLoading, error} = useFetch(`http://localhost:3000/recipes/${id}`)
  const {mode} = useTheme()
  return (
    <div className={`recepie ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Loading ...</p>}
      {recepie && (
        <div>
          <h2>{recepie.title}</h2>
          <p>Takes {recepie.cookingTime} to cook.</p>

          <ul>
            {recepie.ingredients.map(ingredient => ( 
            <li key={ingredient}> {ingredient} </li>
            ))}
          </ul>
          
          <p className='method'>{recepie.method}</p>

        </div>
        )}

    </div>
  )
}

export default Recepie