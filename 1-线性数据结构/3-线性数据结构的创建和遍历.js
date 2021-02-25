/**
 * 链表的创建和遍历
 */

 function createNode(value){
    this.value = value;
    this.next = null;
 }

 let Node1 = new createNode(1);
 let Node2 = new createNode(2);
 let Node3 = new createNode(3);
 let Node4 = new createNode(4);
 let Node5 = new createNode(5);

 function Nodes(arr) {
     if(arr == null) {
         return;
     }
     let root = arr[0];
     for(let i = 0 ; i < arr.length ;i++) {
            if(i == arr.length - 1 ){
                arr[i].next = null;
            }else{
                arr[i].next = arr[i+1];
            }
     }
     return root;
 }

 let root = Nodes([Node1,Node2,Node3,Node4,Node5]);


 /**
  * 遍历
  * 
  */

function ergodic1(root) {
    console.log(root)
    let temp = root;
     while(true){
         if(temp != null) {
             console.log(temp.value);
         }else{
             break;
         }
         temp = temp.next;
     }
}

// ergodic1(root);



function ergodic2(root) {

    if(root != null) {
        console.log(root.value);
    }else{
        return;
    }
    ergodic2(root.next);
}

// ergodic2(root);


/**
 * 
 * 链表的逆置
 * 
 */

 // 1 -> 2 -> 3
 // 3 -> 2 -> null
 // 3 -> 2 -> 1 
 function reverseList(root) {
     if(root.next.next == null) {
        root.next.next = root;
        return root.next;
     }else{
       let result = reverseList(root.next);
       root.next.next = root;
       root.next = null;
       return result;
     }
 }
 let lastNode = reverseList(root);
 ergodic2(lastNode);
 console.log(lastNode)


 