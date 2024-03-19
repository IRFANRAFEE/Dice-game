import React, { useEffect } from 'react'
import Score from './Score'
import Number from './Number'
import styled from 'styled-components'
import DiceRolling from './DiceRolling'
import { useState } from 'react'
 const Wrapper = styled.div`
    border: 1px solid black;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
 `
function Page2() {
  const[newScore,setNewscore]=useState(5)
  const [img,setImg]=useState(4)
  const [selected, setSelected]=useState()
  useEffect(()=>{   
     
    if (selected===img) {
      setNewscore((prev)=>newScore+img)
    }
    else{
      setNewscore((prev)=>newScore-2)
  
    }
    setSelected(undefined)
  },[])
  return (
    <>
    <Wrapper>
    <Score newscore={newScore} setnewscore={setNewscore}></Score>
    <Number selected={selected} setSelected={setSelected}></Number>
    </Wrapper>
<DiceRolling  img={img} setImg={setImg}></DiceRolling>
    </>
  )
}

export default Page2