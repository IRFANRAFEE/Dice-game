import React from 'react'

import styled from 'styled-components'

const MainSection = styled.section`
    width: 1182px;
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
    height: 522px;
    /* border: 1px solid green; */
    display: flex;
`
const ImageContainer=styled.div`
    /* border: 1px solid red; */
    height: 100%;
    width: 60%;

`
 const Title = styled.div`
/* border: 1px solid black; */
width: 40%;
height:100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
h1{
font-size: 3rem;
font-weight: bolder;
}
button{
    width: 224px;
    height: 44px;
    background-color: black;
    border: 1px solid transparent;
    border-radius: 5px;
    color: white;
    font-size:18px;
cursor: pointer;
    font-family: 'Poppins', sans-serif;
    /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap'); */
    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: ease-in-out 0.5s;
    }
}
 `
function Page1({startgame}) {
  return (
<>
<MainSection>
<ImageContainer>
    <div>
    <img src="./diceImage/dice.png" alt="" srcset="" />
    </div>
</ImageContainer>
<Title>
    <h1>DICE GAME</h1>
    <button onClick={startgame}>PlayNow</button>
</Title>
</MainSection>
</>
  )
}

export default Page1