import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../data'

const Index = () => {
  const [name, setName] = useState('')
  const [people, setPeople] = useState(data)
  const [showModal, setShowModal] = useState(false)

  const initialState = {
      people: data,
      isModalOpen: false,
      modalContent: 'Hello'
  }

  const reducer = (state, action) => {
      if(action.type === 'TESTING') {
          return state
      }

  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      dispatch({type: 'TESTING' })
    } else {
      
    }
  }
  return (
    <>
      {showModal && <Modal />}

      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <button type='submit'>Add</button>
      </form>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </>
  )
}

export default Index
