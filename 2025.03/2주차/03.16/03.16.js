var isBalanced = function (root) {
  function DFS(root) {
    if (!root) {
      return 0;
    }

    const left = DFS(root.left);
    const right = DFS(root.right);

    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
    return Math.max(left, right) + 1;
  }

  return DFS(root) !== -1;
};
