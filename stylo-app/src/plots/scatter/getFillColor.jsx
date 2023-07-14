const colors = [
  "#006400",
  "#00008b",
  "#b03060",
  "#ff0000",
  "#ffff00",
  "#00ff00",
  "#00ffff",
  "#ff00ff",
  "#6495ed",
  "#ffdead",
];

export default function getFillColor(d, listPrefix) {
  for (var i = 0; i < listPrefix.length; i++) {
    let name = d.name || d._row?.match(/.*?(?=[\_][A-Za-z0-9])/);
    if (name === undefined) {
    } else if (listPrefix[i] === name[0]) {
      return colors[i];
    } else {
    }
  }
}
