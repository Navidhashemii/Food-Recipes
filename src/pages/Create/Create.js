import { useState } from 'react'
import './Create.css'


function Create() {

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')


  return (
    <div className='create'>
      <h2 className='page-title'>Add New Recepies</h2>

      <form>
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

        <button className='btn'>Submit</button>
      </form>

    </div>
  )
}

export default Create