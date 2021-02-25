/**
 * 二叉树的搜素
 * 
 * 深度优先搜素：更适合探索未知
 * 对于二叉树来说，深度优先搜素和前序遍历得到顺序是一样的
 * 
 * 
 * 广度优先搜索：更适合探索局域
 */


 /**
  * 深度优先搜索
  */

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
let g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;


/**
 * 深度优先搜索
 * @param {*} root 
 * @param {*} target 
 */
function deepSearch(root,target){
    if(root == null) {
        return false;
    }
    if(root.value == target) {
        return true;
    }
    console.log(root.value)
    let left = deepSearch(root.left,target);
    let right = deepSearch(root.right,target);
    return left || right;
}

// let flag = deepSearch(a,'f');
// console.log(flag);


/**
 * 广度优先搜索
 * 
 */

 function breadthSearch(rootlist,target){
    if(rootlist == null || rootlist.length == 0)  {
        return false;
    }
    let childlist = [];
    for(let i = 0; i < rootlist.length ;i++){
        console.log(rootlist[i].value);
        if(rootlist[i] != null && rootlist[i].value == target) {
            return true;
        }else{
            //rootlist[i].left,如果子节点不存在，没必要进行push了
            rootlist[i].left && childlist.push(rootlist[i].left);
            rootlist[i].right && childlist.push(rootlist[i].right);
        }
    }
    return breadthSearch(childlist,target);
 }

 let flag = breadthSearch([a],'n');
 console.log(flag);

