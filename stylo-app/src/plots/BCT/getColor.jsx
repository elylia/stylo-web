import generateColorPalette from "../color-palette/colorPalette";

export default function getColor(d, list_prefix) {
  const colors = generateColorPalette(list_prefix.length);

  for (var i = 0; i < list_prefix.length; i++) {
    let name = d.data.name?.match(/.*?(?=[\_][A-Za-z0-9])/);
    if (name === undefined) {
    } else if (name === null) {
    } else if (list_prefix[i] === name[0]) {
      return colors[i];
    } else {
    }
  }
}
