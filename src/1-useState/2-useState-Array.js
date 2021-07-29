import { useState } from 'react'
import { data } from '../data'

const UseStateAray = () => {
  const [people, setPeople] = useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      {people.map((people) => {
        const { id, name } = people
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove Item</button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>
        Remove All
      </button>
    </>
  )
}

export default UseStateAray
