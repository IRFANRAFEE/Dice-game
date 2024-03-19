import React, { useState } from 'react'
import styled from 'styled-components'
import Buton from './Buton'
  const MainSection = styled.section`
  border: 1px solid red;
  height: 30rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  `
  const Div= styled.div`
    /* border: 1px solid blue; */
    height: 90%;
    width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `
  const MainButton=styled.div`
    display: flex;
  flex-direction: column;
  gap: 10px;
  `

function DiceRolling({img,setImg}) {
  let randomnumber= function (max,min){
    // console.log("clicked");
  return (Math.floor( Math.random()*(max-min)+min));
   
   }
   function rollDice(){
     let num = randomnumber(7,1)
    setImg( num)
    // console.log(num);
   }
   
  return (
    
    <MainSection>
    <Div>
      <img src={`/diceRoll/dice_${img}.png`} alt="" srcset=""  onClick={rollDice}/>
      <p>Click on Dice to roll</p>
      <MainButton>
      <Buton text="Reset Score" ></Buton>
      <Buton text="Show Rules" isblack={true}></Buton>
      </MainButton>
      </Div>
    </MainSection>
    
  
  )
}

export default DiceRolling