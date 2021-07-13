import { Circle } from './circle';
import { createCanvas } from './create-canvas';
import { Particle } from './particle';
import { random } from './utils';

const $canvas = createCanvas();
const ctx = $canvas.getContext('2d')!;
const DPR = window.devicePixelRatio || 3;
const particleSet: Set<Particle> = new Set();
const circleSet: Set<Circle> = new Set();

function createParticles(x: number, y: number, count: number) {
  for (let i = 0; i < count; i++) {
    particleSet.add(
      new Particle(
        x + random(10),
        y + random(10),
        5 + Math.round(Math.random() * 10)
      )
    );
  }
}

function update() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  for (const particle of particleSet.values()) {
    particle.draw(ctx);
    if (particle.ended) {
      particleSet.delete(particle);
    }
  }
  for (const circle of circleSet.values()) {
    circle.draw(ctx);
    if (circle.ended) {
      circleSet.delete(circle);
    }
  }
  window.requestAnimationFrame(update);
}

window.addEventListener('click', (event) => {
  $canvas.width = window.innerWidth * DPR;
  $canvas.height = window.innerHeight * DPR;
  ctx.scale(DPR, DPR);
  const { pageX, pageY } = event;
  createParticles(pageX, pageY, 40);
  circleSet.add(new Circle(pageX, pageY, 0));
});

window.requestAnimationFrame(update);
 