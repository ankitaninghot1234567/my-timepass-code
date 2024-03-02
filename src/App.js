// import logo from './try.png';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Utubememo from './Components/Utubememo';

// import Music from './Components/Music';
// import Romantic from './Components/Romantic'
// import Hiphop from './Components/Hiphop';
// import Spritual from './Components/Spritual';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Bootstrap from './Components/Bootstrap';


// import Mycounter from './Components/Mycounter';
// import Background from './Components/Background';
// import Check from './Components/Check';
// import Navbar from './Components/Navbar';
// import Textbox from './Components/Textbox';
// import Youtube from './Components/Youtube';
import Flower from './Components/Flower';
import Youtube from './Components/Youtube';
import Painting from './Components/Painting';
import Home from './Components/Home';
// import TopNav from './Components/TopNav';
// import Texteditor from './Components/Texteditor';



function App() {
  return (
    <>

      {/* <Heading></Heading>
    <Check></Check>
   <Slider></Slider>
  
{/* <TopNav hrishabh="Basant Panchami" another="valentain"
 change ="website" Contact="ankita775683" graduation="BE">
</TopNav> */}
      {/* <Texteditor></Texteditor>  */}
      {/* <Navbar></Navbar>   */}
      {/* <Background></Background> */}
      {/* <Mycounter></Mycounter> */}



      {/* 
<BrowserRouter>
<Utubememo></Utubememo>
<Routes>
<Route path='/Romantic song'element ={<Romantic></Romantic>} ></Route>
       <Route path='/Music' element ={<Music></Music>}></Route>
       <Route path='/Hiphopsong' element ={<Hiphop></Hiphop>}></Route>
       <Route path='/spritualbhajan' element ={<Spritual></Spritual>}></Route>
</Routes>
</BrowserRouter> */}




      {/* <Textbox></Textbox> */}

      {/* <Bootstrap></Bootstrap> */}
      <BrowserRouter>
        <Youtube></Youtube>
        <Routes>
          <Route path='/flower' element={<Flower></Flower>}></Route>
          <Route path='/krishna' element={<Painting></Painting>}></Route>
          <Route path='/Home' element={<Home></Home>}></Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
