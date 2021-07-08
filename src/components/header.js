import React from 'react';
import "./header.css";

function Header(){
    return(
        <div className = "Head">
           <div className = 'challenge'>
               YourChallenge
           </div>
            <ul className = "List">
                <li>Product</li>
                <li>Download</li>
                <li>Pricing</li>
            </ul>
        </div>
    );
}

export default Header;