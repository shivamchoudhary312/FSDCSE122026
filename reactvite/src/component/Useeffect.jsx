import React, { useEffect, useState } from 'react'

function UseEffect() {
  const [count, setCount] = useState(0);
  const[pointer, setPointer] = useState(1000);
  const[products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch('https://fakestoreapi.com/products');
        const jsondata = await data.json();
        console.log(jsondata);
        setProducts(jsondata);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      UseEffect
      <h2 style={{ color: 'blue' }}>{count}</h2>
      <h2 style={{ color: 'red' }}>{pointer}</h2>
      <div>
        {products.map((product) => (
          <div key={product.id} style={{ display: 'flex', border: '1px solid black', margin: '10px', padding: '10px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>${product.price.toFixed(2)}</p>
              <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
              <p>Category: {product.category}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setCount(count + 10)}>
      
        Counter
      </button>
      <button onClick={() => setPointer(pointer + 10)}>
        Pointer
      </button>
    </div>
  )
}

export default UseEffect