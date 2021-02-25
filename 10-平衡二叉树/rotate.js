/**
 * 二叉树的单旋操作（左单旋，右单旋）
 * 
 * 某一节点不平衡，
 * 如果左边浅，右边深，进行左单旋
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
//  let a = new Node('A');
//  let b = new Node('B');
//  let c = new Node('C');
//  let d = new Node('D');

//  a.right = b;
//  b.left = c;
//  b.right = d;
//  a.left = b;
//  b.left = c;
//  b.right = d;

 function leftRotate(root) {
    let newNode = root.right; //新根
    let changeNode = root.right.left;//变化的节点
    newNode.left = root; 
    root.right = changeNode;
    return newNode;
 }

 function rightRotate(root) {
    let newNode = root.left;
    let changeNode = root.left.right;
    newNode.right = root;
    root.left = changeNode;
    return newNode;
 }

 function rotateTree(root) {
    if(isBalance(root)){
        return root;
    }
    if(root.left != null){
       root.left = rotateTree(root.left);
    }
    if(root.right != null) {
       root.right = rotateTree(root.right);
    }
    //能走到这一步肯定不是平衡二叉树
    if(getDepth(root.left) < getDepth(root.right)) {//左单旋
      let change = root.right.left;
      let nochange = root.right.right;
      if(getDepth(change) > getDepth(nochange)) {
         root.right = rightRotate(root.right);//右左双旋
       } 
       let newRoot = leftRotate(root);
       newRoot.left = rotateTree(newRoot.left);//左左双旋
       newRoot = rotateTree(newRoot);
       return newRoot;
    }else{
       let change = root.left.right;
       let nochange = root.left.left;
       if(getDepth(change) > getDepth(nochange)) {
         root.left = leftRotate(root.left);
       } 
       let newRoot = rightRotate(root);
       newRoot.right = rotateTree(newRoot.right);
       newRoot = rotateTree(newRoot)
       return  newRoot;
    }
 }
//  console.log(isBalance(a));
//  let root1 = rotateTree(a);
//  console.log(root1);
//  console.log(isBalance(a))

let root = buildSearchTree(arr);
console.log(isBalance(root),'isbalance');
console.log(searchTreeQuery(root,1000))
console.log(num2);
let newRoot = rotateTree(root);
num2 = 0;
console.log('====')
console.log(isBalance(newRoot),'isbalance');
console.log(searchTreeQuery(newRoot,1000))
console.log(num2);
