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
import Dresses from './Components/Dresses/Dresses';
import Categories from './Components/Filter/Categories';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div>
      <div className='menu'>
    <Router>
    <nav>
        <Link className='link word' to = "/"><img className='logo' src = "https://ouch-cdn2.icons8.com/_n0c2LUxMKtXCzugm46OAHLgAsTTSWqi6YWK33dfKrA/rs:fit:256:337/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDc0/L2QzZWQwZjFkLWEw/MmQtNDI2YS1iYzJl/LTQxYjUxNzY3MjIw/Zi5wbmc.png" alt ="logo"/></Link>
        <Link className='link word' to = "/about">ABOUT</Link>
        <Link className='link word' to = "/contact">CONTACT</Link>
        <Link className='link' to = "/cart" target="_blank"><img className='iconCart' src ="https://img.icons8.com/carbon-copy/256/shopping-cart.png" alt = "iconCart" /></Link>
    </nav>

    <Routes>
        <Route path = "about" element ={<About />} />
        <Route path = "contact" element ={<Contact />} />
        <Route path = "cart" element ={<Cart />} />
    </Routes>
</Router>
</div>

    <div className='container'>
        <Categories />
        <Dresses />
      </div>
      </div>
  );
}

export default App;