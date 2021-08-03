import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// second parameter
// cleanup function
const UseEffectBasics = () => {
  const [size, setSize] = useState(window.innerWidth)
  console.log(size)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    console.log('useEffect Running running')

    window.addEventListener('resize', checkSize)

    return () => {
      console.log('Cleanup function running')
      window.removeEventListener('resize', checkSize)
    }
  })

  return (
    <>
      <h1>Window</h1>
      <h2>{size}px</h2>
    </>
  )
}

export default UseEffectBasics
