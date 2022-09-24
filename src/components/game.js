import React from 'react'
import Board from './board'
import Winnerfunc from './winnerfunc'
import Modal from './modal'

export default function Game({handleClick}) {

    let [squares , setsquares] = React.useState(new Array(9).fill(null))

    let [count , setcount] = React.useState(true)

    let [winner , setwinnner] = React.useState()



    function handleClick(e){
        setsquares(preval=>{
            return preval.map((val , index)=>{

                
                    if(!val && index==Number(e.target.value) && count){
                        return 'X'
                    }else if(!val && index==Number(e.target.value) && !count){
                        return 'O'
                    }else{
                        return val
                    }

                
                
            })


        })

        setcount(preval=> !preval)

    }


    React.useEffect(()=>{

      let winner =   Winnerfunc(squares)

      if(winner){
        setwinnner(winner)
      }

    },[squares])


    function restartgame(){
        setwinnner(null)
        setcount(true)
        setsquares(new Array(9).fill(null))
    }

    let allatempted = squares.every(val=>{
        return val
    })

    console.log(allatempted)

  return (
    <>

    {(winner || allatempted)  &&   <Modal restartgame={restartgame} winner={winner} allatempted={allatempted} />}
    {(!winner && !allatempted) && <Board onClick={handleClick} squares={squares} />}

    </>

  )
}

