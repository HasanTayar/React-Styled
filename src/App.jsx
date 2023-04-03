import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Names from './Commpents/Names/Names'
import getData from './data'
import Card from './Commpents/Card/Card';
import Box1 from './Commpents/Box1/Box1';
function App() {
  const [names , setNames] = useState(getData);
 
  return (
   <div>
    <Box1/>
   </div>
  )
}

export default App
