import React from 'react'
import './App.css'
import Students from './pages/students/index.jsx'
import Groups from './pages/groups/index.jsx'
import Landing from './pages/Landing.jsx'
import { ClassComponent } from './ClassCompoment.jsx'

function App() {
  return (
    <div>
    
      <h1 className='headers'>Hello, React!</h1>
      <ClassComponent/>
<Landing/>
    </div>
  )
}

export default App
