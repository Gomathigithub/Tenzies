import React from 'react'
import Dice from "./Dice"

export default function Game() {
  return (
    <div>
        <h2 className="game-h2">Tenzies</h2>
        <p className="game-p"> Roll untill all dice are the same. Click each die to freeze it at its current value between the rolls.</p>
        <div>
            <Dice/>
        </div>
    </div>
    
  )
}
