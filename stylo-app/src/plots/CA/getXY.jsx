let xs = [];

let ys = [];
export default function getXYfromJSONTree(node) {
  xs.push(node.x);
  ys.push(node.y);
  if (typeof node.children != "undefined") {
    for (const j in node.children) {
      getXYfromJSONTree(node.children[j]);
    }
  }
}
