import React from 'react';
import './Circle.css';

// Draw 5 to 7 circles in same place 
// Hadieh Shafie style.

export default function Circle({
    x, y, width, height, parent
}){
    return(
        <div className="Circle"
            style={{
                // backgroundColor: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
                backgroundColor: `rgb(${255},${getRandomInt(255)},${getRandomInt(255)})`,
                width: width + "px",
                height: height + "px",
                borderRadius: "50%",
                position: parent ? "initial" : "absolute",
                top: y,
                left: x,
            }}
        >
            
        </div>
    )
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}