import React from 'react'
import styled from 'styled-components'
const Button= styled.button`
    /* background-color: red; */
    width: 10rem;
    height: 2rem;
    border-radius: 5px;
    /* border: none; */
    border: 1px solid black;
    background-color: whitesmoke;
`
const BlackButton= styled.button`
    background-color:black;
    color: white;
    width: 10rem;
    height: 2rem;
    border-radius: 5px;
    /* border: none; */
    border: 1px solid black;
`
function Buton({text ,isblack,resetscore}) {
  
  return (
    <div>
        {
            isblack?<BlackButton >{text}</BlackButton>:<Button onClick={resetscore}>{text}</Button>
        }
    </div>
  )
}

export default Buton