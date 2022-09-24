import React from 'react'

export default function Square({ onClick , square, index}) {


  return (
    <button value={index}  onClick={(e)=>onClick(e)} >
        {square}
    </button>
  )
}
