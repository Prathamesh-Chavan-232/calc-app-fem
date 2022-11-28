import React from 'react'

export default function Numpad() {
  
  const grid:number[] = new Array(20);

  for(var i = 0; i < 20; i++) {
      grid.fill(i+1);
  } 

  return (
    <div className='numpad'>
      <div className='grid'>
        {grid.map((val,i)=> {
          console.log(i);
          return <button className="btn btn-sm" key={i}></button>
        })}
      </div>
    </div>
  )
}
