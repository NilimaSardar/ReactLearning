import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const someObj ={
    name: "Nilima",
    greeting: "HELLO!"
  }
  const someArr=[1,2,3]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card name='Nilima' address='Biratnagar-12,Nepal'/>
      <Card name='Helly' address='Washingtowns'/>
      <Card name='Helly'/>

    </>
  )
}

export default App
