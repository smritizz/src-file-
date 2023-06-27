import React from "react";
import p1 from "./p1.png"

function List(props)
{
    return(
        <div className="listofhosts">
            <div className="image">
             <img src={props.picsrc}></img>
            </div>
            <div className="textt">
          <p className="namee">{props.name}</p>
          <p className="username">{props.userid}</p>
          </div>
        </div>

    );
}
export default List;