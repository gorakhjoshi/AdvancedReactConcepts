import { useState } from 'react'

const UseStateObject = () => {
  //   const [person, setPerson] = React.useState({
  //     name: 'Ram',
  //     age: 32,
  //     message: 'Hello, I am Ram!',
  //   })

  const [name, setName] = useState('Ram')
  const [age, setAge] = useState(32)
  const [message, setMessage] = useState('Hello, I am Ram!')

  const changeMessage = () => {
    setMessage('New Message')
  }

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </>
  )
}

export default UseStateObject
