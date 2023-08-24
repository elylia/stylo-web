const colors = [
  "#CC6677",
  "#332288",
  "#DDCC77",
  "#117733",
  "#88CCEE",
  "#882255",
  "#44AA99",
  "#999933",
  "#AA4499",
];
export default function getColor(d, listPrefix) {
  for (var i = 0; i < listPrefix.length; i++) {
    let name = d.data.name?.match(/.*?(?=[\_][A-Za-z0-9]+)/);
    if (name === undefined) {
    } else if (listPrefix[i] === name[0]) {
      return colors[i];
    } else {
    }
  }
}
