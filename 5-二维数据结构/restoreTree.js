/**
 * 前序、中序还原二叉树
 */

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

// var a = new Node("a");
// var b = new Node("b");
// var c = new Node("c");
// var d = new Node("d");
// var e = new Node("e");
// var f = new Node("f");
// var g = new Node("g");

// a.left = b;
// a.right = c;
// c.left = f;
// c.right = g;
// b.left = d;
// b.right = e;

 let prev = ['a','b','d','e','c','f','g'];//前序 根左右
 let mid = ['d','b','e','a','f','c','g'];// 中序 左根右
 let back = ['d','e','b','f','g','c','a'];//后序 左右根
 // a
 // bde dbe
 // b 
 // d e 
 // ['d']  ['e']


 // bde dbe 
 // b
 // dd ee

 // d d

 function restoreTree1(prev,mid){
    if(!prev || !mid || prev.length == 0 || mid.length == 0) {
        return null;
    }
    let root = new Node(prev[0]);
    let index = mid.indexOf(root.value);
    let prevLeft = prev.slice(1,index + 1);
    let prevRight = prev.slice(index + 1,prev.length);
    let midLeft = mid.slice(0,index);
    let midRight = mid.slice(index+1,mid.length);
    root.left = restoreTree1(prevLeft,midLeft);
    root.right = restoreTree1(prevRight,midRight);
    return root;
 }
 let root = restoreTree1(prev,mid);
//  console.log(root);


/**
 * 后序、中序还原二叉树
 * 
 * let mid = ['d','b','e','a','f','c','g'];// 中序 左根右
   let back = ['d','e','b','f','g','c','a'];//后序 左右根
 */

 function restoreTree2(back , mid) {
    if(!back || !mid || back.length == 0 || mid.length == 0 ){
        return null;
    }
    let root = new Node(back[back.length - 1]);
    let index = mid.indexOf(root.value);
    let midLeft = mid.slice(0,index);
    let midRight = mid.slice(index+1,mid.length);
    let backLeft = back.slice(0,index);
    let backRight = back.slice(index,back.length - 1);
    root.left = restoreTree2(backLeft,midLeft);
    root.right = restoreTree2(backRight,midRight);
    return root;
 }
let root2 = restoreTree2(back , mid)
console.log(root2);