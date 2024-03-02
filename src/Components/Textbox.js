import React from "react";

export default function Textbox(){
    return(
        
      <>
 
      {/* <p><label for="w3review">Review of W3Schools:</label></p>

  // <textarea id="w3review" name="w3review" rows="4" cols="50">At w3schools.com you will learn how to make a website.
    They offer free tutorials in all web development technologies.</textarea>
  <br/>
  <input type="submit"  value="Submit"/>
  <input type="submit" value="changes to upper case"/>
  <input type="submit" value="chages to lower case"/> */}
  
     
  <div class="row my-4"> 
 
     
 <textarea class="col-3 mx-2" style={{backgroundColor:'blue',width:250, height:250}} >26K (12.4%) User</textarea>
        <div class="col-3 mx-2"style={{backgroundColor:'skyblue' ,width:250}}>Anurag</div>
       
        <div class="col-3 mx-2"style={{backgroundColor:'yellow',color:"red" ,width:250}}>Chetan</div>
        <div class="col-3 mx-2" style={{backgroundColor:'red' ,width:250}}>Radha</div>

      </div>

      </>
    )
}