import React from 'react';

class SubtractiveColor extends React.Component {
  constructor(props) {
    super(props);
    this._canvas = React.createRef();
  }

  componentDidMount() {

    const canvas = this._canvas.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    let cw = canvas.width;
    let ch = canvas.height;

    const s = 57;                     // num squares
    const n = Math.floor(cw / s);     // width of color sq in px
    const o = 32;                     // luma offset; high = dark
    const hue = [1, 0.5, 0]           // hue offset

    // p : x-coord -> color intensity (per component) (with space for hue offset)
    const p = x => 128 - o + (128 - o) * Math.sin(x * ((2 * Math.PI) / cw) + Math.PI);

    // color position and velocity
    let position = [0, 0, 0];
    let velocity = Array.from({ length: 3 }, () => Math.random());
    const draw = () => {
      for (let x = -cw / 2; x < 1.5 * cw; x += n) {
        for (let y = 0; y < ch; y += n) {
          ctx.fillStyle = `rgb(
            ${p(x - position[0]) + Math.min(2 * o, hue[0] * o)}, 
            ${p(x - position[1]) + Math.min(2 * o, hue[1] * o)}, 
            ${p(x - position[2]) + Math.min(2 * o, hue[2] * o)}
          )`;
          ctx.fillRect(x - y / 3, y, n, 3 * n);
        }
      }
      window.requestAnimationFrame(draw);
    }
    draw();

    setInterval(() => {
      position = position.map((c, i) => (cw + c + velocity[i]) % cw);
    }, 100);
  }

  render() {
    return (
      <div className='subtractive-color'>
        <canvas ref={this._canvas}></canvas>
      </div>
    );
  }
}

export default SubtractiveColor;