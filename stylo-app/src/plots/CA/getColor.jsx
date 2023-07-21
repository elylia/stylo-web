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
export default function getColor(d, list_prefix) {
  for (var i = 0; i < list_prefix.length; i++) {
    let name = d.data.name?.match(/.*?(?=[\_][A-Za-z0-9])/);
    if (name === undefined) {
    } else if (list_prefix[i] === name[0]) {
      return colors[i];
    } else {
    }
  }
}
