/**
 * Generates a dynamic canvas texture for a cube face.
 * @param {string} title - The title text to display.
 * @param {string} subtitle - Optional subtitle.
 * @param {string} color - Accent color.
 * @returns {HTMLCanvasElement} The canvas used for texture.
 */
export function generateFaceTexture(title, subtitle, color) {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');


  ctx.fillStyle = '#111111';
  ctx.fillRect(0, 0, size, size);


  ctx.strokeStyle = color;
  ctx.lineWidth = 20;
  ctx.strokeRect(10, 10, size - 20, size - 20);


  ctx.shadowColor = color;
  ctx.shadowBlur = 20;


  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 60px Roboto, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(title, size / 2, size / 2 - 30);


  ctx.fillStyle = color;
  ctx.font = '30px Roboto, sans-serif';
  ctx.fillText("CLICK TO VIEW", size / 2, size / 2 + 40);


  ctx.fillStyle = '#333';
  ctx.fillRect(size/2 - 100, size/2 + 80, 200, 2);

  return canvas;
}
