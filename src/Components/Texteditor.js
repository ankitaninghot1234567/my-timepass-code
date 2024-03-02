import React, { useState } from "react"

export default function Texteditor(props) {
  let[otext,ftext]=useState('Hi this is my text')

  let changekarnewala=()=>
  {
  let newtext=otext.toUpperCase();
  ftext(newtext)
   }


  let jahachangehoga=(ankita)=>
  {
ftext(ankita.target.value)
  }
                                                     // 

let lowerbtn =()=>
{
  let lowertext=otext.toLowerCase();
  ftext(lowertext)
}

                                                     // 

let[oldstyle,newstyle]=useState({
color:'black',
backgroundColor:'white'
})

let changecolor=()=>
{ 
  if (oldstyle.color==='white') {
    newstyle({
      color: 'black',
      backgroundColor:'white'
      })
  }
    else
    {
      newstyle({
        color:'white',
        backgroundColor:'black'
      })
    }
  }
   
                                                             //



  return (
    <div > 
  <div  class="container">

    <h1>Enter the text you want to analyze</h1>
    <textarea class="form-control" rows="8" value={otext}
     onChange={jahachangehoga}   style={oldstyle} ></textarea>

    <button className="btn btn-primary mx-3" onClick={changekarnewala} >change to Uppercase</button>
    <button class='btn btn-primary mx-3' onClick={lowerbtn}>change to Lowercase</button> 
    <button class="btn btn-primary mx-3" onClick={changecolor}>Dark mode Enabled</button>
    <i class="fa fa-car "></i>
    <i class="bi bi-lightbulb-fill"></i>
    <i class="bi bi-lightbulb"></i>

</div>
    
    <h1>your word record</h1>
    <p> {otext.split(" ").length}word {otext.length}character</p>
    
    <p>{otext}</p>   
 
    
    </div>
      
  )
  
  }


