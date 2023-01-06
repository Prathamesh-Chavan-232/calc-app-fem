import React from 'react'

export default function Numpad() {
  // const grid:string[]= ['7','8','9','DEL','4','5','6','+','1','2','3','-','.','0','/','x','RESET','='];
  return (
    <div className='numpad'>
      <div className='grid'>
        <button className='btn btn-white'>7</button>
        <button className='btn btn-white'>8</button>
        <button className='btn btn-white'>9</button>
        <button className='btn btn-blue'>DEL</button>
        <button className='btn btn-white'>4</button>
        <button className='btn btn-white'>5</button>
        <button className='btn btn-white'>6</button>
        <button className='btn btn-white'>+</button>
        <button className='btn btn-white'>1</button>
        <button className='btn btn-white'>2</button>
        <button className='btn btn-white'>3</button>
        <button className='btn btn-white'>-</button>
        <button className='btn btn-white'>.</button>
        <button className='btn btn-white'>0</button>
        <button className='btn btn-white'>/</button>
        <button className='btn btn-white'>x</button>
        <button className='btn btn-blue span-two'>RESET</button>
        <button className='btn btn-red span-two'>=</button>
      </div>
    </div>
  )
}
