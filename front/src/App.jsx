import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import data from './data.js';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <a href="/">Amazona</a>
      </header>
      <div>
        <h1>Featured Products</h1>
        {
          data.products.map((product, index) =>{
            console.log(product.name, index);
            product.name;
            <div>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App
