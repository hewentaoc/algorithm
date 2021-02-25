/**
 * 取个中间数 
 * 小于中间数的值放在左边
 * 大于中间数的值放在右边
 * 
 * 
 */

let arr = [4,2,6,9,1,5,8,7];

function fastSort(arr) {
    if(arr == null || arr.length == 1 || arr.length == 0) {
        return arr;
    }
    let mid = parseInt((arr.length) / 2);
    let newArr = [];
    let left =[];
    let right = [];
    for(let i = 0 ; i < arr.length ; i++) {
         if(arr[i] < arr[mid]) {
            left.push(arr[i]);
         }else if(arr[i] > arr[mid]){
            right.push(arr[i]);
         }
    }
    newArr = newArr.concat(fastSort(left),[arr[mid]],fastSort(right));
    return newArr;
}
// let newArr = fastSort(arr)
// console.log(newArr)



/**
 * 标准版本快速排序
 * @param {} arr 
 * @param {*} begin 
 * @param {*} end 
 */

function exchange(arr , a , b) {
    let temp ;
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


function quickSort(arr,begin,end) {
    if(arr == null || arr.length == 0 || begin >= end -1) {
        return;
    }
    let left = begin;
    let right = end;
    do{
        do {
           left++;
        }while(left < right && arr[left] < arr[begin]);
        do {
            right--;
        }while(left < right && arr[right] > arr[begin]);
        if(left < right) {
            exchange(arr,left,right);
        }
    }while(left < right);
    /**
     * 在begin的值为最大的时候
     * left会一直加,直到超过right的索引
     * right是length -1 , 也就是arr的最后一位
     * 所以就会交换begin 和 midIndex === right的值
     */
    let midIndex = left === right ? right - 1 : right;
    exchange(arr,begin,midIndex);
    quickSort(arr,begin,midIndex);
    quickSort(arr,midIndex + 1,end);
}
quickSort(arr,0 ,arr.length)
console.log(arr);





