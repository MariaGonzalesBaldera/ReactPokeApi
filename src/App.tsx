import { useState } from 'react'
import './App.css'
import {Header,Footer,SeachPokemon} from './components'

function App() {
  const [counter, setCounter] = useState<number>(0)

  const handleAddCountex=()=>{
    setCounter(counter + 1)
  }

  return (
    <>
    <Header/>
    <div>
      <h1>Mi primera web con React</h1>
      <p>Mi contador {counter}</p>
      <button onClick={handleAddCountex}>
        Add number
      </button>
    </div>
    <Footer name='Maria Cristina' sponsors={["Sponsor 1","Sponsor 2","Sponsor 3"]}/>
    </>
  )
}

export default App
