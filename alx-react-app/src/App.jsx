import { useState } from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <WelcomeMessage />
    </div>
  )
}

export default App