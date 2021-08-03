import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// second parameter
// cleanup function
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('Inside useEffect')
  })
  console.log('Outside useEffect')
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  )
}

export default UseEffectBasics
