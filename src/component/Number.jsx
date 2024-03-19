import React, { useState } from 'react'
import styled from 'styled-components'
const MainContainer=styled.div`
    border: 1px solid red;
    display: flex;
    width: 30%;
    /* flex-direction: column; */
    height: 100%;
    /* align-items: center; */
    /* justify-content: center; */
`
const NumberContainer=styled.div`
border: 1px solid green;
width: 30px;
height: 30px;
margin: 7px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
/* background-color: ${(isselected)=>(isselected ? "black" : "white")}; */
/* color: ${!((isselected)=>(isselected ? "black" : "white"))}; */
`
const Wrapper=styled.div`
    /* border: 1px solid cyan; */
    /* width: 4rem; */
    /* display: flex; */
`
let arr=[1,2,3,4,5,6]

function Number({selected,setSelected}) {

     
     console.log(selected);
  return(
    
   <>
    <MainContainer>
        {
            arr.map((item,i)=>
            <Wrapper>
            <NumberContainer key={i}
            onClick={()=>setSelected(item)}
            // isselected={item===selected}
            >{item}</NumberContainer>
            </Wrapper>
            
            )
        }
        <div></div>
    </MainContainer>   
   </> 
  )
}

export default Number