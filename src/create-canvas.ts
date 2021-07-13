export function createCanvas() {
  const $canvas = document.createElement('canvas');
  $canvas.className = 'click_fire'
  $canvas.style.pointerEvents = 'none';
  $canvas.style.position = 'fixed';
  $canvas.style.left = '0px';
  $canvas.style.top = '0px';
  $canvas.style.right = '0px';
  $canvas.style.bottom = '0px';
  $canvas.style.width = '100%';
  $canvas.style.height = '100%'
  $canvas.style.zIndex = '9999999';

  document.body.appendChild($canvas);
  return $canvas;
}