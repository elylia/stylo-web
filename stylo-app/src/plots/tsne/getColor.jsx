import generateColorPalette from "../color-palette/colorPalette";

export default function getColor(d, listPrefix) {
  const colors = generateColorPalette(listPrefix.length);
  for (var i = 0; i < listPrefix.length; i++) {
    let name = d.name?.match(/.*?(?=[\_][A-Za-z0-9]+)/);
    if (name === undefined) {
    } else if (listPrefix[i] === name[0]) {
      return colors[i];
    } else {
    }
  }
}
