import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Cart from './Components/Cart/Cart';
import Home from './Components/Home';
import { useSelector } from 'react-redux';
import { getCartItems } from './Redux/cartSlice';


function App() {

  const countCart = useSelector(getCartItems);
  const sumCountCart = countCart.length;

  return (
    <div>
      <div>
    <Router>
    <nav>
        <img className='logo' src = "https://ouch-cdn2.icons8.com/_n0c2LUxMKtXCzugm46OAHLgAsTTSWqi6YWK33dfKrA/rs:fit:256:337/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDc0/L2QzZWQwZjFkLWEw/MmQtNDI2YS1iYzJl/LTQxYjUxNzY3MjIw/Zi5wbmc.png" alt ="logo"/>
        <Link className='link word' to = "/">CATALOG</Link>
        <Link className='link word' to = "/about">ABOUT</Link>
        <Link className='link word' to = "/contact">CONTACT</Link>
        <Link className='link' to = "/cart"><img className='iconCart' src ="https://img.icons8.com/carbon-copy/256/shopping-cart.png" alt = "iconCart" />
        <span className='counterItems'>{sumCountCart}</span></Link>
    </nav>
    
    <Routes>
        <Route path = "/" element ={<Home/>} />
        <Route path = "about" element ={<About />} />
        <Route path = "contact" element ={<Contact />} />
        <Route path = "cart" element ={<Cart />} />
    </Routes>
</Router>
</div>
      </div>
  );
}

export default App;