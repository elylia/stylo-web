import numTips from "./numTips";

const defaultBranchLength = 0.5;

export default function computePosition(
  node,
  x = 0,
  y = 0,
  isFirstInstance = true
) {
  if (isFirstInstance) {
    node.start = 0;
    node.end = 2;
    node.angle = 0;
    node.ntips = numTips(node);
    node.x = 0;
    node.y = 0;
  }

  let child,
    arc,
    lastStart = node.start;
  if (node.children) {
    for (var i = 0; i < node.children.length; i++) {
      child = node.children[i];
      child.ntips = numTips(child);

      arc = ((node.end - node.start) * child.ntips) / node.ntips;
      child.start = lastStart;
      child.end = child.start + arc;

      child.angle = child.start + (child.end - child.start) / 2;
      lastStart = child.end;

      if (child.branch_length) {
        child.x = x + child.branch_length * Math.sin(child.angle * Math.PI);
        child.y = y + child.branch_length * Math.cos(child.angle * Math.PI);
      } else {
        child.x = x + defaultBranchLength * Math.sin(child.angle * Math.PI);
        child.y = y + defaultBranchLength * Math.cos(child.angle * Math.PI);
      }

      computePosition(child, child.x, child.y, false);
    }
  }
  return node;
}
