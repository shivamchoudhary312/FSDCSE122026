import React , {useState} from 'react'

function Reacthook() {
    const [counter, setCounter] = useState(100);
    function increamentCounter(){
        // setCounter(counter - 10);
        setCounter(counter + 10);
    }
  return (
    <div>
        <h2 style={{ color: 'blue' }}>working on Reacthook</h2>
        <h1>Counter: {counter}</h1>
        <button onClick={increamentCounter}>IncreamentCounter</button>
        <button onClick={() => setCounter(counter - 10)}>DecreamentCounter</button>
    </div>
  )
}

export default Reacthook