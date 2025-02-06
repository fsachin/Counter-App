import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count +1);
  }

  const decrement = () =>{
    setCount(count -1);
  }

  return (
    <div className='counterApp'>
      <h1> Counter App</h1>
      <p>count : {count}</p>
      <button onClick={increment}>Increment</button>
      <button> onClick={decrement}decrement</button>
    </div>
  )
}

export default App
