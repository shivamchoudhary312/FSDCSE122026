import React from 'react'

function Useeffect() {
    const [count, setCount] = useState(20);
useEffect(() => {
    console.log("useeffect called");
    document.title = `you clicked ${count} times`;
  }, [count]);
  return (
    <div>Useeffect</div>
  )
}

export default Useeffect