import React from "react";

export default function TopNav(props){
    return(
      <>
      <h1>Hii a very happy {props.hrishabh} to all...!</h1>
      <h2>hii avery happy {props.another}...!</h2>

  
  <a class="active" href="#home">{props.change }</a>
  <a href="#news">News</a>
  <a href="#contact">{props.Contact}</a>
  <a href="#about">About</a>



  <p>i have done my {props.graduation}</p>





  <div className="row">
  <div className='col-sm-4' id="color">
  <h1>this is container one </h1>
  <p>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, 
    in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.
  </p>
</div>
 
  <div className='col-sm-4'  id="color">
  <h1>this is container two </h1>
  <p>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, 
    in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.
  </p>
</div>
  <div className='col-sm-4'  id="color">
  <h1>this is container three </h1>
  <p>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, 
    in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.
  </p>
  </div>

  </div>


</>




    )
}