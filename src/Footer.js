import React from "react";
import logo from "./logo.png";
import twitter_yt_tele from "./Socialicons.png";

function Footer()
{
    return (
        <div className="footer">
            <div className="logo2">
                <img src={logo}></img>

            </div>
            <div className="copyright">
                <p className="copyright">Copyright © Cruip.com. All rights reserved.</p>

            </div>
            <div className="socialicons">
            <img src={twitter_yt_tele}></img>
            

            </div>

        </div>

    );

}
export default Footer;
