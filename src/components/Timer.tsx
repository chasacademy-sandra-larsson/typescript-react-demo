// What about useEffect?


import { useState, useEffect } from 'react'

const Timer = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount(c => c + 1)
    }, 1000)
  }, [count])

  return <h2>{count}</h2>
}

export default Timer