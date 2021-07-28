import React, { useState } from 'react'

const UseStateBasics = () => {
  const [text, setText] = useState('Random Text')
  const handleClick = () => {
    if (text === 'random Text') {
      setText('Matched')
    } else {
      setText('Not Matched')
    }
  }

  return (
    <>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Click Me
      </button>
    </>
  )
}

export default UseStateBasics
