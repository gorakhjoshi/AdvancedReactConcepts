import { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const reset = () => {
    setValue(0)
  }

  const complexCounter = () => {
    setTimeout(() => {
      // setValue(value + 1)
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }

  return (
    <>
      <section>
        <h2> Simple Counter </h2>
        <h2>{value}</h2>
        <button className='btn' onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button className='btn' onClick={reset}>
          Reset
        </button>
        <button className='btn' onClick={() => setValue(value - 1)}>
          Decrease
        </button>
      </section>

      <section style={{ margin: '4rem 0' }}>
        <h2> Complex Counter </h2>
        <h2>{value}</h2>

        <button className='btn' onClick={complexCounter}>
          Increase Later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
