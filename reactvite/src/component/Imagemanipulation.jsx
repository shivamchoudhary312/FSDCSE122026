import React, { useState } from 'react';
import spiderman from '../images/old-blue-car-photo.jpg';

function Imagemanipulation() {

  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);
  const[red, setRed] = useState(0);
  const[green, setGreen] = useState(0);
  const[blue, setBlue] = useState(0);
function enhanceHeight(){
    setHeight(height+10);
}
function enhancewidth(){
    setWidth(width+10);
}
function decreaseHeight(){
    setHeight(height-10);
}
function decreasewidth(){
    setWidth(width-10);
}

  return (
    <div>

      <h2 style={{ color: 'white', backgroundColor: 'brown' }}>
        Image Manipulation using React
      </h2>

      <div
        style={{
          border: '2px solid red',
          height: '300px',
          width: '400px',
          marginLeft: '300px'
        }}
      >

        <img
          src={spiderman}
          height={height}
          width={width}
          alt="Spiderman"
          style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`}}
        />

        <div>
          <h2>Spiderman height: {height}</h2>
          <h2>Spiderman width: {width}</h2>
        </div>

      </div>

      <div>
        <button onClick={enhanceHeight}>Enhance height</button>
        <button onClick={enhancewidth}>Enhance width</button>
      </div>
       <div>
        <button onClick={decreaseHeight}>decrease height</button>
        <button onClick={decreasewidth}>decrease width</button>
      </div>

    </div>
  );
}

export default Imagemanipulation;