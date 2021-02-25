/**
 * 前序遍历
 * 
 */

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");
var g = new Node("g");

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

/**
 * 前序遍历
 * 根 左 右
 * @param {*} root 
 */
function prevTree(root) {
    if(!root) {
        return ;
    }
    console.log(root.value);
    root.left && prevTree(root.left);
    root.right && prevTree(root.right);
}
// prevTree(a);

/**
 * 中序遍历
 * 左 根 右
 */

function midTree(root){
    if(!root){
        return;
    }
    root.left && midTree(root.left);
    console.log(root.value);
    root.right && midTree(root.right);
}

// midTree(a);

/**
 * 后序遍历
 * 左 右 根
 */
 function backTree(root){
     if(!root){
         return;
     }
     root.left && backTree(root.left);
     root.right && backTree(root.right);
     console.log(root.value);
 }
//  backTree(a)