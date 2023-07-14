import numTips from "./numTips";

const defaultBranchLength = 0.5; // Adjust this value as desired

export default function computePosition(
  node,
  x = 0,
  y = 0,
  angle = 0,
  isFirstInstance = true
) {
  if (isFirstInstance) {
    // node is root
    node.start = 0; // guarantees no arcs overlap 0
    node.end = 2; // *pi
    node.angle = 0; // irrelevant
    node.ntips = numTips(node);
    node.x = 0;
    node.y = 0;
  }

  var child,
    arc,
    lastStart = node.start;
  if (node.children) {
    for (var i = 0; i < node.children.length; i++) {
      // the child of the current node
      child = node.children[i];
      // the number of tips the child node has
      child.ntips = numTips(child);

      // assign proportion of arc to this child
      arc = ((node.end - node.start) * child.ntips) / node.ntips;
      child.start = lastStart;
      child.end = child.start + arc;

      // bisect the arc
      child.angle = child.start + (child.end - child.start) / 2;
      lastStart = child.end;

      // map to coordinates
      if (child.branch_length) {
        child.x = x + child.branch_length * Math.sin(child.angle * Math.PI);
        child.y = y + child.branch_length * Math.cos(child.angle * Math.PI);
      } else {
        child.x = x + defaultBranchLength * Math.sin(child.angle * Math.PI);
        child.y = y + defaultBranchLength * Math.cos(child.angle * Math.PI);
      }

      // climb up
      computePosition(child, child.x, child.y, child.angle, false);
    }
  }
  // had to add this!
  return node;
}
