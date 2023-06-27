import React from 'react';
import './upper.css';
import logo from "./logo.png"
import Middlepart from './Middlepart'
import Advertisement from './Advertisement.js'
import Footer from './Footer.js'

import Purplebox from './Purplebox';
import Qasection from './Qasection';

function Upper(){
  return (
    <div className='upper'>
        <div className='logo'>
        <img alt="Logo" src={logo} />
        </div>
       
        <button id='subscribe'><p className='buttonstyle'>Subscribe --- </p></button>    
     <Purplebox />
    <Middlepart />
    <Qasection />
    <Advertisement />
    <Footer />
    </div>
  );
}

export default Upper;
