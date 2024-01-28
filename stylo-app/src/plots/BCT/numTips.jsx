function levelorder(root) {
  var queue = [root],
    result = [],
    curnode;

  while (queue.length > 0) {
    curnode = queue.pop();
    result.push(curnode);
    if (curnode.children) {
      for (const child of curnode.children) {
        queue.push(child);
      }
    }
  }
  return result;
}

export default function (thisnode) {
  var result = 0;
  for (const node of levelorder(thisnode)) {
    if (!node.children) {
      result++;
    }
  }
  return result;
}
