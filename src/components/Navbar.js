import { useState } from 'react';
import Search from './Search';
import logo from '../img/icone.PNG';
import hambuguer from '../img/hamburger.png';
import x from '../img/x.png';
import { Nav } from '../style/style';
import '../App.css';

function NavBar({ setText, text, mobile, setMobile }) {
 

 console.log(mobile)
  return (
    <Nav>
      <img src={logo} alt="logo" className="clicavel" />

      <Search value={text} onChange={(e) => setText(e)} />
      <button className="close-btn" onClick={() => setMobile(!mobile)}>
        <img className="close-img" src={mobile ? x : hambuguer} alt="mobile" />
      </button>
    </Nav>
  );
}

export default NavBar;
