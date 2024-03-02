import React, { useState } from 'react'

export default function Mycounter() {
let[setvalue,newvalue]=useState(0)




  return (
    <>
    <h3 id='moving'><marquee>This is my first counter machine</marquee> </h3>
    <center>
    <div id="counterbox" >
      <h4 id='content'>{setvalue}</h4>
      </div>
<br></br>
    <button className='btn btn-primary mx-3' onClick={()=>newvalue(setvalue+1)}>increse count</button>
    <button className='btn btn-primary' onClick={()=>newvalue(setvalue-1)}>decrese count</button>
    </center>
    </>
  )
}
