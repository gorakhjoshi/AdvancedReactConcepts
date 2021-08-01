import React from 'react'

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: 'Ram',
    age: 32,
    message: 'Hello, I am Ram!',
  })

  const changeMessage = () => {
    setPerson({ ...person, message: 'New Message' })
  }

  console.log(person)

  return (
    <>
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </>
  )
}

export default UseStateObject
