import React, { useEffect, useRef } from 'react';

const SubtractiveColor = () => {
  /* TODO: sample for adornments; resize handler */
  let _canvas = useRef(null);

  useEffect(() => { // this is not super expensive because the layout is only mounted once

    // canvas dom stuff
    const canvas = _canvas.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    let cw = canvas.width;
    let ch = canvas.height;

    // parameters
    const n = 20;                     // width of color sq in px
    const o = 32;                     // luma offset; high = dark
    const hue = [1, 0.5, 0]           // hue offset
    // color position and velocity
    let position = [0, 0, 0];
    let velocity = Array.from({ length: 3 }, () => Math.random());

    // p : x-coord -> color intensity (per component) (with space for hue offset)
    const p = x => 128 - o + (128 - o) * Math.sin(x * ((2 * Math.PI) / cw) + Math.PI);

    const draw = () => {
      for (let x = 0; x < cw; x += n) {
        for (let y = 0; y < ch; y += n) {
          ctx.fillStyle = `rgb(
            ${p(x - position[0]) + Math.min(2 * o, hue[0] * o)}, 
            ${p(x - position[1]) + Math.min(2 * o, hue[1] * o)}, 
            ${p(x - position[2]) + Math.min(2 * o, hue[2] * o)}
          )`;
          ctx.fillRect(x - y / 3, y, n, 3 * n);
        }
      }
      // let the browser decide when to redraw
      window.requestAnimationFrame(draw);
    }
    draw();

    // motion parameterized by time
    setInterval(() => {
      position = position.map((c, i) => (cw + c + velocity[i]) % cw);
    }, 100);
  });

  return (
    <div className='subtractive-color'>
      <canvas ref={_canvas}></canvas>
    </div>
  );
}

export default SubtractiveColor;