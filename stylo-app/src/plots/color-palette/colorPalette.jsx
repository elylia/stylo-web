import chroma from "chroma-js";

export default function generateColorPalette(numClasses) {
  const colors = [];
  const hueStart = 120;
  const hueStep = 360 / numClasses;

  for (let i = 0; i < numClasses; i++) {
    const hue = (hueStart + i * hueStep) % 360;
    const color = chroma.hsl(hue, 1, 0.35);
    const hexColors = color.darken(0.1).saturate(0.8).hex();
    colors.push(hexColors);
  }

  return colors;
}
