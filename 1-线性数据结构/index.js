function Node(value) {
    this.next = null;
    this.value = value;
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
function reverseList(root) {
    if(root.next.next == null ) {
        root.next.next = root;
        return root.next;//逆置后的根节点 
    }else{
        let result = reverseList(root.next);
        console.log(result)
        root.next.next = root;
        root.next = null;
        return result;
    }
}
reverseList(node1);
