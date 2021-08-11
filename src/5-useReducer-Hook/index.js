import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../data';

const initialState = {
  people: [],
  isModalOpen: false,
  modalContent: 'Hello',
};

const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item Added',
    };
  }
  if (action.type === 'REMOVE') {
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, ismodalOpen: false };
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please enter valid input',
    };
  }

  throw new Error('No any matching dispatch found');
};
const Index = () => {
  const [name, setName] = useState('');

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}

      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button type='submit'>Add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button
              onClick={() => dispatch({ type: 'REMOVE', payload: person.id })}
            >
              REMOVE
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
