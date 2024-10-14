import React from 'react'

export default function Die(props) {
const heldStyle={
    backgroundColor:props.isheld? "#59E391":"white"
}

  return (
    <div className="die-box" style={ heldStyle} onClick={()=> props.handleHold(props.id)}>
        <h2 className="die-number">{props.value}</h2>
    </div>
  )
}
