import React from 'react'

export default function Winnerfunc(squares) {

  const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,7],

  ]


  for(let i=0;i<wins.length;i++){
    const [a,b,c] = wins[i]


    if(squares[a] == 'X' ||squares[a]=='O' ){
        if( squares[a]==squares[b] && squares[a]==squares[c]){
            return squares[a]
        }

    }
  }

  return null
}


