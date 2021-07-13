export class Circle {
  x: number;
  y: number;
  radius: number;
  duration = 500;
  startTime = Date.now();
  ended = false;
  speed = {
    radius: 3
  };
  color: string;

  constructor(x = 0, y = 0, radius = 10, color = '#00bcd4') {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw(canvasCtx: CanvasRenderingContext2D) {
    let progress = 1 - (Date.now() - this.startTime) / this.duration;
    progress = progress > 0 ? progress : 0;
    canvasCtx.save();
    canvasCtx.globalAlpha = progress;
    canvasCtx.strokeStyle = this.color;
    canvasCtx.lineWidth =
      4 * (1 - (Date.now() - this.startTime) / this.duration);
    canvasCtx.beginPath();
    canvasCtx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    canvasCtx.stroke();
    canvasCtx.restore();
    if (progress === 0) {
      this.ended = true;
    } else {
      this.radius += this.speed.radius;
    }
  }
}