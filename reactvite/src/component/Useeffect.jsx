import React, { useEffect, useState } from 'react'

function UseEffect() {
  const [count, setCount] = useState(0);
  const[pointer, setPointer] = useState(1000);

  useEffect(() => {
    console.log("HY, count=" + count)
  }),[count]

  return (
    <div>
      UseEffect
      <h2 style={{ color: 'blue' }}>{count}</h2>
      <h2 style={{ color: 'red' }}>{pointer}</h2>
      <div></div>

      <button onClick={() => setCount(count + 10)}>
        Counter
      </button>
    </div>
  )
}

export default UseEffect