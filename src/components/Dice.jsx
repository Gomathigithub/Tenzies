import React, { useEffect, useState } from 'react'
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function Dice() {
 
   const[numbersArray,setNumbersArray]=useState(getDice())
   const [tenzies,setTenzies]=useState(false)
   const [rolls,setRolls]=useState(0)
   const [isRollsup,setisRollsUp] = useState(false)

  useEffect(()=>{
      const allHeld=numbersArray.every(die=>die.isheld)
      const firstElement= numbersArray[0].value
      const allSame= numbersArray.every(die=>die.value === firstElement)
      if(allHeld && allSame)
        setTenzies(true)
      if(rolls=== 8)
        setisRollsUp(true)

  },[numbersArray])

   function generateDie(){
    return {
        value:Math.ceil(Math.random() * 6 ),
        isheld:false,
        id:nanoid()
    }
   }
    function getDice(){
        
        const numbers=[]
        for(let i=1;i<=10;i++){
            numbers.push(
                generateDie()
            )
        }
        return numbers
    }
    function holdDice(id){
        if(!isRollsup){
        setNumbersArray(prevNumbers=>prevNumbers.map(die=>{
            return die.id===id? {...die,isheld:!die.isheld}:die
        }
        ))
      }
       
    }
    function rollDice(){
       if(!tenzies && !isRollsup){
        setRolls(preRolls=>preRolls+1)
        setNumbersArray(prevNumbers=> prevNumbers.map(die=>{
            return die.isheld? die: 
            generateDie()
        }))
      }else{
        setTenzies(false)
        setRolls(0)
        setNumbersArray(getDice())
      }
    }
    const diceElement= numbersArray.map(n=> <Die key= {n.id} value={n.value} id={n.id}
        isheld={n.isheld} handleHold={holdDice}></Die>)
  return (
    <div>
        {tenzies &&  <Confetti/>}
        <h5>No. of Rolls: {rolls}</h5>
        <div className='grid-dice'>
            {diceElement}
        </div>
        <button className="game-button" onClick={rollDice}><span className="button-text">{tenzies || isRollsup ?"New Game":"Roll"}</span></button>
        {(isRollsup && !tenzies) && <h5> Sorry ! You have reached max no. of rolls.</h5>}
    </div>
  )
}
