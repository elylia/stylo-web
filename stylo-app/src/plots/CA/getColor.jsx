const colors = [
  "#C9886F",
  "#748793",
  "#957591",
  "#8A7870",
  "#8F90B0",
  "#808C78",
  "#A48858",
  "#5A9E84",
  "#6E8C74",
  "#D67878",
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
