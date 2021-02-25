/**
 * 封装栈
 * 栈: 先进后出
 */
function Stack() {
    this.arr = [];
    //进栈
    this.push = function (val) {
        this.arr.push(val)
    }
    //出栈
    this.pop = function(){
        this.arr.pop();
    }
}


let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.arr)
// stack.pop();
// console.log(stack.arr);

/**
 * 队列
 * 队列: 先进先出
 */

function Queue() {
    this.arr = [];
    this.push = function(val) {
        this.arr.push(val);
    }
    this.pop = function () {
        this.arr.shift();
    }
}
let queue = new Queue();
queue.push(3)
queue.push(2);
queue.push(1);
console.log(queue.arr);
queue.pop();
console.log(queue.arr);


