/**
 * 平衡二叉树
 * 
 * 根节点的左子树与右子树的高度差不能超过1 
 * 二叉树的每个子树都符合第一条
 */

//  function Node(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//  }
//  let a = new Node('a');
//  let b = new Node('b');
//  let c = new Node('c');
//  let d = new Node('d');
//  let e = new Node('e');
//  let f = new Node('f');
//  let g = new Node('g');
//  let h = new Node('h');
//  let i = new Node('i');

//  a.left = b;
//  a.right = c;
//  b.left = d;
//  b.right = e;
//  c.left = f;
//  c.right = g;
//  d.right = h;

//  e.right = i;

//求二叉树的深度
 function getDepth(root) {
    if(root == null) {
        return 0;
    }
    let leftDepth = getDepth(root.left);
    let rightDepth = getDepth(root.right);
    return Math.max(leftDepth,rightDepth) + 1;
 }



 function isBalance(root) {
    if(root == null) {
        return true;
    }
    let leftDepth = getDepth(root.left);
    let rightDepth = getDepth(root.right);
    if(Math.abs(leftDepth - rightDepth) > 1) {
        return false;
    }else{
        return isBalance(root.left) && isBalance(root.right);
    }
 }

//  console.log(isBalance(a));
