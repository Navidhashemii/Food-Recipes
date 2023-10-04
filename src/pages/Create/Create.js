import { useState } from 'react'
import './Create.css'
import { useFetch } from '../../hooks/useFetch'


function Create() {

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])

  const {postData, data, error} = useFetch('http://localhost:3000/recipes', 'POST')

  const handleSubmit= (e) => {
    e.preventDefault()
    postData({title, ingredients, method, cookingTime: cookingTime + " minutes"})
    setTitle('')
    setMethod('')
    setCookingTime('')
    setIngredients([])
  }

  const handleAdd = (e) => {
    e.preventDefault()
     
    if(newIngredient && !ingredients.includes(newIngredient)){
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    setNewIngredient('')
  }


  return (
    <div className='create'>
      <h2 className='page-title'>Add New Recepies</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recepie Title:</span>
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
            <button onClick={handleAdd} className='btn1'>Add</button>

          </div>
        </label>
        <p className='ing'>Current Ingredients: {ingredients.map(i => <em key={i}>{i}, </em> )}</p>

        <label>
          <span>Recepie Method: </span>
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

        <button className='btn2'>Submit</button>
      </form>
      

    </div>
  )
}

export default Create