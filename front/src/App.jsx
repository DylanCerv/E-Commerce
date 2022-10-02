import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ListProducts from './components/ListProducts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <a href="/">Amazona</a>
      </header>
      <div>
        <ListProducts/>
      </div>
    </div>
  )
}

export default App
