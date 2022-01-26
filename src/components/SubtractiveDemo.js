import React, { useEffect, useRef } from "react";

import "./SubtractiveDemo.scss";

const SubtractiveDemo = () => {
  let _canvas = useRef(null);
  let _reset = useRef(null);
  let _red = useRef(null);
  let _green = useRef(null);
  let _blue = useRef(null);

  useEffect(() => {
    const canvas = _canvas.current;
    const ctx = canvas.getContext('2d');
    const reset = _reset.current;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Canvas dim in pixels
    let cw = canvas.width;
    let ch = canvas.height;

    // Controls
    const red = _red.current;
    const green = _green.current;
    const blue = _blue.current;
    for (let slider of [red, green, blue]) {
      slider.max = cw;
      slider.value = cw / 2;
      slider.style.width = `${cw}px`;
      slider.step = "any";
      console.log(slider.name)
    }
    reset.onclick = e => [red, green, blue].forEach(slider => slider.value = cw / 2);

    // Params
    let n = 20;   // num sections
    let k = 0.05;  // test blackness for all of them

    /** position on canvas, bar width, filter width --> cmyk component (floored) 
      * p : [0, cw] * N * N -> [0, 1] 
    */
    const p = (x, b, w) => (1 / 4) + Math.sin(2 * Math.PI / w * (Math.floor(x / b) * b)) / 4

    /** cmyk component --> rgb value
      * f : [0, 1] --> [0, 255] 
    */
    const f = g => 255 * (1 - g) * (1 - k);

    const filter_base = [
      [0, 1, 1],  // red filter blocks cyan
      [1, 0, 1],  // green filter blocks magenta
      [1, 1, 0],  // blue filter blocks yellow
    ];

    // little guys
    const fw = cw / 2 // filter width in px
    const bw = fw / n // bar width in px

    // Animation
    const draw = () => {
      ctx.clearRect(0, 0, cw, ch);
      // Hue offset in pixels
      const sliders = [red, green, blue].map(slider => parseInt(slider.value));

      for (let filter = 0; filter < 3; filter++) {
        for (let bar = 0; bar < n; bar++) {
          ctx.fillStyle = `rgb(${filter_base[filter].map(x => f(x && p(bar * bw, bw, fw)))
            })`;
          ctx.fillRect(
            sliders[filter] - fw / 2 + bw * bar,
            10 + filter * 10,
            bw,
            5);
        }
      }

      // draw a rectangle everywhere a filter segment begins or ends
      const delims = sliders.map(
        slider => [...Array(n + 1).keys()]
          .map(x => slider + bw * x - fw / 2))
        .flat().sort((a, b) => a - b);

      for (let i = 0; i < delims.length - 1; i++) {
        const filtered = sliders.map(
          slider => + (slider - fw / 2 <= delims[i] && delims[i] < slider + fw / 2)
        );
        ctx.fillStyle = `rgb(${filter_base
          .map(
            (row, idx_rgb) => row.map(
              el => el && filtered[idx_rgb] && p(delims[i] - fw / 2 - sliders[idx_rgb], bw, fw)
            )
          )
          .reduce((partial, a) => partial.map((el, idx) => el + a[idx]))
          .map(v => f(v))
          })`;
        ctx.fillRect(delims[i], 50, delims[i + 1] - delims[i], 235);
      }
      window.requestAnimationFrame(draw);
    }
    draw();
  });

  return (
    <div className="subtractive-demo">
      <canvas ref={_canvas}></canvas>
      <input type="range" ref={_red} name="red" />
      <input type="range" ref={_green} name="green" />
      <input type="range" ref={_blue} name="blue" />
      <button ref={_reset}>&#8634;</button>
    </div>
  )
}

export default SubtractiveDemo;