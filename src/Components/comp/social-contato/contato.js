import React from "react";
import { SocialData } from "../../data/social";
import "./contato.css"

function Contato() {
    const data = SocialData;
    return(
         <div className="social-contact">
            {data.map((item)=>{
                return(
                    <a href={item.link}>
                        <div className="social-icon-div">
                            <img src={item.icon} className="social-icon"/>
                        </div>
                    </a>
                )

            })}
        </div>
    );
};

export default Contato;
