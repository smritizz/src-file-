import React from 'react';
import './upper.css';
import pause from "./pause.png";
import play1 from "./play1.png";
import play2 from "./play2.png";




const Purplebox = () => {
  return (
    <div className='purplebox'>
       <div className='firstpart'>
        <p className='firstpartt'>Super Excited (aka The Saturday Edition)</p>
       </div>
       <div className='secondpart'>
        <p className='secondpartt'>Indie Stories · Jan 24 · Episode 234</p>

       </div>
       <div className='thirdpart'>
        <div className='thirdbox'>
            <div style={{}} className='inlineelements'>
                <img src={pause}></img>
                <img style={{marginBottom: "10%"}} src={play1}></img>
                <img style={{marginBottom: "10%", marginRight: "-90%"}} src={play2}></img>
                <div className='square'>
                    <p style={{color: "white", marginTop: "-1%"}}>1x</p>
                </div>
                <div className='rectangle'>

                </div>
                <p className='duration1'>4:34</p>
                <p className='duration2'>|</p>
                <p className='duration3'>44:05</p>




            </div>

        </div>

       </div>

      
    </div>
  );
}

export default Purplebox;
