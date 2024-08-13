import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/About';
import Sidebar from './components/sidebar/Sidebar';
import { useState } from "react";
const App = () => {
   const [closeSidebar , setCloseSidebar] = useState(false)
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <div className='row'>
      <div className={`${closeSidebar ? "col-lg-1 col-md-12 col-12"  : "col-lg-3 col-md-12 col-12"}`}>
       <Sidebar closeSidebar = {closeSidebar} setCloseSidebar = {setCloseSidebar}/>
      </div>
      <div className={`${closeSidebar ? "col-lg-11 col-md-12 col-12"  : "col-lg-9 col-md-12 col-12"}`}>
        <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
       </Routes>
      </div>
      </div>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
