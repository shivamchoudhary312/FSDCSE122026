import React, { useEffect, useState } from 'react'

function UseEffect() {

  const [count, setCount] = useState(0)
  const [pointer, setPointer] = useState(1000)
  const [product, setProduct] = useState(null)

  useEffect(() => {

    async function fetchData() {
      try {
        const data = await fetch("https://dummyjson.com/products")
        const jsonData = await data.json();
        const newdata= jsonData.products;
      setProduct(newdata);
        console.log(newdata)
      
      } catch (e) {
        console.log("Error" + e)
      }
    }

    fetchData()

  }, [])

  return (
    <div>
      UseEffect

      <h2 style={{color:'red'}}>count={count}</h2>
      <h2 style={{color:'blue'}}>pointer={pointer}</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {product && product.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => setCount(count + 10)}>
        Counter
      </button>

      <button onClick={() => setPointer(pointer + 10)}>
        pointer
      </button>
    </div>
  )
}
export default UseEffect