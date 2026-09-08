import React, { useState } from 'react';
import spiderman from '../images/old-blue-car-photo.jpg';

function Imagemanipulation() {

  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const [angle, setAngle] = useState(0);

  const [postiontop, setpostiontop] = useState(0);
  const [postionleft, setpostionleft] = useState(0);
  const [postiondown, setpostiondown] = useState(0);
  const [postionright, setpostionright] = useState(0);

  function enhanceHeight() {
    setHeight(height + 10);
  }

  function enhancewidth() {
    setWidth(width + 10);
  }

  function decreaseHeight() {
    setHeight(height - 10);
  }

  function decreasewidth() {
    setWidth(width - 10);
  }

  function randomColor() {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  }

  function rotateangle() {
    setAngle(angle + 25);
  }

  function top() {
    setpostiontop(postiontop - 20);
  }

  function down() {
    setpostiondown(postiondown + 20);
  }

  function left() {
    setpostionleft(postionleft - 20);
  }

  function right() {
    setpostionright(postionright + 20);
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
          marginLeft: '300px',
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      >

        <img
          src={spiderman}
          height={height}
          width={width}
          style={{
            transform: `
              rotate(${angle}deg)
              translateX(${postionleft + postionright}px)
              translateY(${postiontop + postiondown}px)
            `
          }}
          alt="Spiderman"
        />

        <div>
          <h2>Spiderman height: {height}</h2>
          <h2>Spiderman width: {width}</h2>
        </div>

        <div>
          <h2>color code: {red},{green},{blue}</h2>
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

      <div>
        <button onClick={randomColor}>change color</button>
      </div>

      <div>
        <button onClick={rotateangle}>rotate image</button>
      </div>

      <div>
        <button onClick={top}>top</button>
        <button onClick={down}>down</button>
        <button onClick={left}>left</button>
        <button onClick={right}>right</button>
      </div>

    </div>
  );
}

export default Imagemanipulation;