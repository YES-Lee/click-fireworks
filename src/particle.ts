import { random } from './utils';

export class Particle {
  x: number;
  y: number;
  radius: number;
  startRadius: number;
  ended = false;
  color: string;

  speed = {
    x: random(5),
    y: random(5),
    radius: 0.5
  };

  constructor(x = 0, y = 0, radius = 10, color = '#00bcd4') {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startRadius = radius;
    this.color = color;
  }

  draw(canvasCtx: CanvasRenderingContext2D) {
    canvasCtx.save();
    canvasCtx.globalAlpha = this.radius / this.startRadius;
    canvasCtx.fillStyle = this.color;
    if (this.ended) return;
    canvasCtx.beginPath();
    canvasCtx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    canvasCtx.fill();
    canvasCtx.restore();

    this.x += this.speed.x;
    this.y += this.speed.y;
    this.radius -= this.speed.radius;

    if (this.radius < 0) {
      this.ended = true;
    }
  }
}
