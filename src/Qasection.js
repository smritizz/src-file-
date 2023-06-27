import React from "react";
import player from "./player.png";
function Qasection()
{
    return(
    <div className="qa">
        
        <div className="qachild1">
         <div className="podcast">
        
         <div className="onlytext">
            <p1 className="t1">Sick Leave for Indie Founders?</p1>
            <br></br>
            <p2 className="t2">Indie Stories · Jan 24 · Episode 234</p2>
            
            <br></br>
            <img className="imgg" src={player}></img>
            </div>

         </div>
         <div style={{backgroundColor:"rgba(139, 92, 246, 1)"}}className="podcast">
         <div className="onlytext">
         <p1 className="t1">When Should You Let People Pay You?</p1>
         <br></br>
            <p2 className="t2">Indie Stories · Jan 24 · Episode 234</p2>
            <br></br>
            <img className="imgg" src={player}></img>
             </div>
             </div>
         </div>
         <div className="podcasthalf">
            

         <div className="onlytext">
         <p1 className="t1">Super Pumped (aka The </p1>
         <br></br>
            <p2 className="t2">Indie Stories · Jan 24 · Episode</p2>
            <br></br>
            <img className="imgg" src={player}></img>
             </div>
             
            
         </div>
        

         
     </div>
    );
}
export default Qasection;
