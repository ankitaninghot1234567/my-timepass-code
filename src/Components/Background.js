import React, { useState } from 'react'

export default function Background() {
  let [oldcolor, newcolor] = useState({               //aqua
    backgroundColor: 'white',
    height: '100vh'
  })
  let colorchange = () => {
    if(oldcolor.backgroundColor == 'white') {
      newcolor({
        backgroundColor: 'aqua',
        height: '100vh'
      })
    }
  };
    let pink =() =>{
      if (oldcolor.backgroundColor=='aqua'){
        newcolor({
          backgroundColor:'pink',
          height:'100vh'
        })
      }
    };

    let red=()=>{
      if (oldcolor.backgroundColor=='pink'){
        newcolor({
          backgroundColor:'red',
          height:'100vh'
        })
      }
    };

    let black=()=>{
      if(oldcolor.backgroundColor=='red'){
        newcolor({
          backgroundColor:'black',
          height:"100vh"
        })
      }
    }

  return (
    <>
      <div style={oldcolor} >
        <button className='btn mx-2' id="colorbtn" onClick={colorchange}>aqua</button>
        <button className='btn mx-3' id="colorpink" onClick={pink}>pink</button>
        <button className='btn btn-danger mx-3'  onClick={red}>red</button>
        <button className='btn btn-dark'  onClick={black}>Black</button>
   </div>
  
    </>
  )

  }