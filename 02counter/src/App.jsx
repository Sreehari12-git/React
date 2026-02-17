import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  const addValue = () => {
    console.log("Clicked", counter);
    counter = counter + 1;
    setCounter(counter)
    
  }

  const decValue = () => {
    if(counter != 0) {
      counter = counter -1;
    }
    setCounter(counter)
  }
  return (
    <>
     <h2>Welcome Sreehari</h2>
     <h3>Counter value: {counter}</h3>
     <button onClick={addValue}>Increment</button>
     <br/>
    <br/>
     <button onClick={decValue}>Decrement</button>
    </>
  )
}

export default App
