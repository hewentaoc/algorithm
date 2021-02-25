/**
 * 二叉搜索树（二叉排序树）
 *
 * 首先使一颗二叉树
 * 其次有排序的效果，
 * 左子树的节点都比当前节点小
 * 右子树的节点都比当前节点大
 * 
 */

 let arr = [];

 for(let i = 0 ;i < 10000 ; i++) {
     arr[i] = Math.floor(Math.random() * 10000);
 }
let num = 0;
 function getTarget(arr,target) {
    for(let i = 0 ; i < arr.length ; i++) {
        num++;
        if(arr[i] == target) {
            return true;
        }
    }
    return false;
 }

let flag = getTarget(arr,1000);
console.log(flag);
console.log(num);


function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function compare(root,num) {
    if(root == null) {
        return;
    }
    if(root.value == num) {
        return;
    }
    if(root.value > num) {//目标值小 放在左子树
        root.left ? compare(root.left,num) : (root.left = new Node(num));
    }else{  
        root.right ? compare(root.right,num) : (root.right =new Node(num)); 
    }
}
function buildSearchTree(arr) {
    if(arr == null || arr.length == 0) {
        return null;
    }
    let root = new Node(arr[0]);

    for(let i = 1 ; i < arr.length ; i++) {
        compare(root,arr[i]);
    }
    return root;
}

let root = buildSearchTree(arr);

console.log('========')

let num2 = 0;
function searchTreeQuery(root,target) {
    if(root == null) {
        return false;
    }
    num2++;
    if(root.value == target) {
        return true;
    }
    if(root.value < target ){
       return searchTreeQuery(root.right,target);
    }else{
       return searchTreeQuery(root.left,target);
    }
}
let isSearch = searchTreeQuery(root,1000);
console.log(isSearch);
console.log(num2);


