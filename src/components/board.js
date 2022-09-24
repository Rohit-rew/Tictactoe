import React from 'react'
import Square from './square'

export default function Board({squares , onClick}) {

   let squaresjsx =  squares.map((square , index)=>{
        return <Square onClick={onClick} square={square} index={index} />
    })



  return (

    <div className='board'>

        {squaresjsx}
     
    </div>
  )
}
