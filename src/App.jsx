import styled from 'styled-components'
import './App.css'
import Page1 from './component/Page1'
import Page2 from './component/Page2'
import { useState } from 'react'

function App() {
const [state,setState]=useState(true)
function startGame(){
  console.log("game started");
  setState(false)
}
  return (
    <>
     {
      state?<Page1 startgame={startGame}></Page1> 
      :<Page2></Page2>
     }
    </>
  )
}

export default App
