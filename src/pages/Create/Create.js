import { useEffect, useState } from 'react'
import './Create.css'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'


function Create() {

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  

  const {postData, data, error} = useFetch('http://localhost:3000/recipes', 'POST')

  const navigate = useNavigate()

  const handleSubmit= (e) => {
    e.preventDefault()
    postData({title, ingredients, method, cookingTime: cookingTime + " minutes"})
  }
  

  const handleAdd = (e) => {
    e.preventDefault()
     
    if(newIngredient && !ingredients.includes(newIngredient)){
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    setNewIngredient('')
  }

  useEffect(() => {

    if(data){
      navigate('/')
    }

  },[data])


  const {color} = useTheme()


  return (
    <div className='create'>
      <h2 className='page-title'>Add New Recipes</h2>

      <form onSubmit={handleSubmit}> 
        <label>
          <span>Recipe Title:</span>
          <input 
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Ingredients: </span>
          <div className='ingredients'>
            <input
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
            />
            <button onClick={handleAdd} style={{background: color}} className='btn1'>Add</button>

          </div>
        </label>
        <p style={{color: color}} className='ing'>Current Ingredients: {ingredients.map(i => <em key={i}>{i}, </em> )}</p>

        <label>
          <span>Recipe Method: </span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking Time(m): </span>
          <input
            type='number'
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
            className='ctime'
          />
        </label>

        <button style={{background: color}} className='btn2'>Submit</button>
      </form>
      

    </div>
  )
}

export default Create