import React from 'react'

export default function Modal(props) {


  return (


    <div className='modalcontainer'>
        <div className='modal'>  {props.winner=="X" ? "Player 1 wins" : props.winner=="O" ? "Player 2 wins" : props.allatempted ? 'Draw' : '' } !

        <button onClick={(e)=>props.restartgame(e)} className='modalbtn'>Restart game</button>

        </div>

    </div>
  )
}
