/**
 * 二维数组
 * 4行8列
 * 数组的进化
 */
let arr = new Array(4);

for(let i = 0 ; i <arr.length ;i ++) {
    arr[i] = new Array(8);
}
console.log(arr);

/**
 * 
 * 二维拓扑结构(图)
 * 链表的进化
 */

 function Node(value) {
     this.value = value;
     this.neighbor = [];
 }

 let a = new Node('a');
 let b = new Node('b');
 let c = new Node('c');
 let d = new Node('d');
 let e = new Node('e');
 let f = new Node('f');
 let g = new Node('g');

a.neighbor.push(b);
a.neighbor.push(c);
a.neighbor.push(d);
b.neighbor.push(a);

/**
 * 树形结构
 * 
 * 树形结构有一个根节点
 * 树形结构没有回路
 * 树是图的一种 -- 有向无环图
 * 树的根节点
 * 树的叶子节点： 下边没有其他节点
 * 节点：普通节点
 * 树的度：树最多叉的叉的个数
 * 树的深度：树最深有几层
 */



 /**
  * 二叉树
  * 
  * 树的度最多为2的树
  * 
  */


/**
 * 满二叉树
 * (1) 所有叶子节点都在最底层
 * (2) 每个非叶子节点都有两个子节点
 * 
 */


 /**
  * 二叉树中子树的概念
  * 
  * 二叉树中，每个节点都认为自己是根节点
  * 二叉树中每个节点或叶子节点都是一颗子树的根节点
  */



 /**
  * 完全二叉树
  * 
  * 国内定义：
  * (1) 叶子节点都在最后一层或倒数第二层
  * (2) 叶子节点都向左聚拢
  * 
  * 国际定义:
  * (1) 叶子节点都在最后一层或倒数第二层
  * (2) 如果有叶子节点，就必然有两个叶子节点
  */



/**
 * 
 * 
 */



