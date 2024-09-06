import { useState } from 'react'
import './App.css'
import Hero from './components/hero'
import Generator from './components/Generator'
import Workout from './components/Workout'

function App() {
  const [workout,setWorkout]=useState(null)
  const [count, setCount] = useState(0)
  
  const[poison,setPoison]=useState('individual')
  const[muscles,setMuscles]=useState([])
  const[goals,setGoals]=useState('strength_power')

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero  />
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goals={goals}
        setGoals={setGoals}
        
      />
      {workout && <Workout workout={workout}/>}
    </main>
  )
}

export default App
