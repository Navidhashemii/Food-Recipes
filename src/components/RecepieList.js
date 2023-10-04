import { Link } from 'react-router-dom'
import './RecepieList.css'


function RecepieList({recepies}) {
  return (
    <div className='recepie-list'>
        {recepies.map(recepie => (
        <div key={recepie.id} className='card'>
            <h3>{recepie.title}</h3>
            <p>{recepie.cookingTime} to make</p>
            <div>{recepie.method.substring(0,90)}...</div>
            <Link to={`/recepies/${recepie.id}`}>Cook This!</Link>
        </div>
      ))}

    </div>
  )
}

export default RecepieList