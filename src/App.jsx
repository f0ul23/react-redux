import { useState } from 'react'
import './App.css'
import Homecontainer from './containers/Homecontainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <Homecontainer />
    </div>
    </>
  )
}

export default App
