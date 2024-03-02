import React from 'react'

export default function Bootstrap() {
  return (
    <>
    <div class="row my-4">
        <div class="col-3" style={{backgroundColor:'yellow'}} >Ankita</div>
        <div class="col-3"style={{backgroundColor:'red'}}>Anurag</div>
        <div class="col-3"style={{backgroundColor:'pink',color:"red"}}>Chetan</div>
        <div class="col-3" style={{backgroundColor:'cyan'}}>Radha</div>
    </div>
    <div>
        <button className='btn btn-danger mx-3'>Click</button>
        <button className='btn btn-primary mx-3'>Click</button>
        <button className='btn btn-warning mx-3'>Click</button>
        <button className='btn btn-light mx-3'style={{color:"green"}}>Click</button>
        <button className='btn btn-success mx-3'>Click</button>
        <button className=' mx-3' style={{backgroundColor:"purple"}}>Click</button> 
    </div>
    </>
  )
}
