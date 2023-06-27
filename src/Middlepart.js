import React from "react";
import List from "./List"
import p1 from "./p1.png"
import p3 from "./p3.png"
import p2 from "./p2.png"


function Middlepart()
{
    return(
    <div className="middle">
        <div className="middleleft">
            <p className="first">Notes</p>
            <br></br>
            <div className="middlesecond">
            <p className="second">In this episode, It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of letraset sheets containing passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <p className="third"> Topics </p>
            <div className="middlefourth">
                <div  className="fourth">
                <p className="fourth">› 0:55 Jason's first podcast ever</p>
                </div>
                <div  className="fourth">
                <p className="fourth">› 1:12 Helen's been on other podcasts: Startups for the Rest of Us, Indie Bites, Indie Worldwide </p>
                </div>
                <div  className="fourth">
                <p className="fourth">› 3:06 Should we invest in the "auto publish to YouTube" feature?</p>
                </div>
                <div  className="fourth">
                <p className="fourth">› 13:32 The best features the ones that feel like "magic" when a customer uses them</p>
                </div>
                <div  className="fourth">
                <p className="fourth">› 18:46 The "wait and see" product development philosophy </p>
                </div>
                <div  className="fourth">
                <p className="fourth">› 20:27 A new podcast website builder CMS and website designs</p>
                </div>
                <div  className="fourth">
                <p className="fourth">› 32:24 Making a few new podcast website themes</p>
                </div>
                <div  className="fourth">
                <p className="fourth">› 34:30 How we run our weekly team meetings</p>
                </div>
                
                <p className="fifth"> Contributers </p>
                <div className="middlesixth">
                </div>
                    
               
                <div className="sixthh">
                <div className="sixth">
                    <p className="sixth"> — <u><b>John Buda</b></u> lives in London, UK. He's been involved in the podcasting world since 2013, and has been building software since 2002.</p>
                </div>
                <div className="sixth">
                    <p className="sixth"> — <u><b>Mark Mitchel</b></u> lives in London, UK. He's been involved in the podcasting world since 2013, and has been building software since 2002.</p>
                </div>
                <div className="sixth">
                    <p className="sixth">— <u><b>Mary James</b></u> lives in London, UK. He's been involved in the podcasting world since 2013, and has been building software since 2002.</p>
                </div>
                </div>
                <p className="seventh">If you liked this episode, popularised in the with the release of letraset sheets containing passages, and more recently with desktop <b>@PublishingSoftware.</b></p>
            </div>
        </div>
        <div className="middleright">
            <div className="headd">
            <p className="heading">Hosts & Guests</p>
            </div>
            <div className="lists">
                <List name="Samantha James" userid="@samyjames" picsrc={p3}></List>
                <List name="Quentin Villard" userid="@quentin789" picsrc={p1}></List>
                <List name="Oliver Martinez" userid="@olivermarti" picsrc={p2}></List>
            </div>
        </div>
    </div>
    );
}
export default Middlepart;