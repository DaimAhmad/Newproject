import 'bootstrap/dist/css/bootstrap.min.css'; 
 import 'bootstrap/dist/js/bootstrap.min.js';   
//  import Admin from './Components/admin';
import { Routes,Route,useLocation } from 'react-router-dom';
import Home from './Components/home';
import Navigation from './Components/navbar';
import Product from './Components/product';
import About from './Components/aboutus';
import Faqs from './Components/Faqs';
import  Women  from './Components/Women';
import  Men  from './Components/Men';
import Unisex from './Components/unisex';
import Contact from './Components/contact';
import Cart from './Components/Cart';
import Enter from './Components/entery';
import Login from './Components/loginform';
import Regestration from './Components/regestrationform';
import Dashboard from './Components/dasboard';



function App() {
 return (
    <div>

 <Routes>
   <Route path="/" element ={<Enter />}/>
    <Route path="/home" element={<Home />} />
    {/* <Route path="/admin" element={<Admin />} /> */}
    <Route path='/dashboard'element={<Dashboard/>}/>
     <Route path='/product' element={<Product/>} />
     <Route path='/about' element={<About/>}/>
     <Route path='/Faqs'element={<Faqs/>}/>
      <Route path='/Women' element={<Women/>} />
      <Route path='/Men' element ={<Men/>}/>
      <Route path='/Unisex' element={<Unisex/>}/>
<Route path ='/Contact' element={<Contact/>}/>
<Route path ='/Cart' element={<Cart/>}/>
<Route path='/Login' element={<Login/>}/>
<Route path='/regestrationform' element={<Regestration/>}/>
 </Routes>
 
    </div>
  );
}

export default App;