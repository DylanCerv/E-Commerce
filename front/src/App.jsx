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
      <main>
        <h1>Featured Products</h1>
        {
          data.products.map((product, index) =>{
            console.log(product.name, index);
            <div>
              <img src={product.image} alt="" />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.name}</p>
            </div>
          })
        }
      </main>
    </div>
  )
}

export default App
