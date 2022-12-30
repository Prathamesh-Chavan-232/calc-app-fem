import React from 'react'

export default function Numpad() {
  
  const grid:number[] = new Array(20);

  for(var i = 0; i < grid.length; i++) {
      grid.fill(i+1);
  } 

  return (
    <div className='numpad'>
      <div className='grid-container'>
        {grid.map((val,i)=> {
          return <button className='btn' key={i}>{i+1}</button>
        })}
      </div>
    </div>
  )
}
