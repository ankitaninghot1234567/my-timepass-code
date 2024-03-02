import React from 'react'
import { Link } from 'react-router-dom'

export default function Youtube() {
    return (
        <>
            <div>
                {/* <a class="form-outline" data-mdb-input-init style={{width:500, marginLeft:400, }} >
  <input type="search" id="form1" class="form-control" 
  placeholder="search" aria-label="Search" /> */}

                {/* 

<i class="bi bi-list" style={{marginLeft:20, marginBottom:200}} ></i>
<img src='download.png' style={{height:50 , marginLeft:20 }}></img>
 <i class="bi bi-search" ></i>
<i class="bi bi-mic-fill" ></i> */}

                <div class="topnav">
                    <button class="btn btn-light mx-3" id='button'><i class="bi bi-list"></i></button>
                    <img src='download.png' alt="img" style={{ height: 50 }}></img>
                    <input type="search" id="form1"
                        placeholder="search" aria-label="Search" />

                    <button class="btn btn-light mx-2"><i class="bi bi-search" ></i></button>
                    <button class="btn btn-light mx-4"><i class="bi bi-mic-fill" ></i></button>
                    <button class="btn btn-light mx-2"><i class="bi bi-camera-reels"></i></button>
                    <button class="btn btn-light mx-2"><i class="bi bi-bell"></i></button>
                    <button class="btn btn-light"><i class="bi bi-circle-fill"></i></button>
                </div>
                <div id="short">
                    <Link button class="btn btn-light my-3" to="/Home" ><i class="bi bi-house-door-fill"></i>Home</Link>
                    <button id="flower" class="btn btn-dark mx-6" >All</button>
                    <Link button class="btn btn-light mx-3" to="/flower">Flowers</Link>
                    <Link button class="btn btn-light mx-2" to="/krishna" >Krishna</Link>
                    <button class="btn btn-light mx-2" >Animated</button>
                    <button class="btn btn-light mx-2" >Music</button>
                    <button class="btn btn-light mx-2" >Live</button>
                    <button class="btn btn-light mx-2" >Comedy</button>
                    <button class="btn btn-light mx-2" >Movie</button>
                    <div><button class="btn btn-light  my-3"><i class="bi bi-skip-end-fill"></i>Shorts</button></div>
                    <div><button class="btn btn-light"><i class="bi bi-skip-end-btn-fill"></i>Subscriptions</button></div>
                    <div><button class="btn btn-light my-3"><i class="bi bi-escape"></i> History</button></div>
                    <div><button class="btn btn-light "><i class="bi bi-play-btn"></i> My Video</button></div>

                </div>


            </div>

        </>
    )
}
