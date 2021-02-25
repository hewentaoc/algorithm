/**
 * 冒泡
 */
let arr = [5,2,1,6,7,9,4];

function bubblingSort(arr) {
    if(arr == null || arr.length == 0) {
        return
    }
    let temp;
    for(let i = 0 ;i < arr.length ;i++) {
        for(let j = 0 ; j < arr.length - 1 -i ;j++) {
            if(arr[j] > arr[j+1]){
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }else{
                continue;
            }
        }
    }
    console.log('冒泡',arr);
}
// bubblingSort(arr);


/**
 * 选择排序
 */

 function chooseSort(arr) {
    if(arr == null || arr.length == 0 ){
        return;
    }
    let temp;
    for(let i = 0 ;i < arr.length ;i++) {
        let index = 0;
        for(let j = 0 ; j < arr.length - i ;j++) {
            if(arr[index] < arr[j]) {
                index = j;
            }else{
                continue;
            }
        }
       temp = arr[arr.length - 1 -i];
       arr[arr.length - 1 -i] = arr[index];
       arr[index] =  temp;
    }
    console.log(arr,'选择');
 }
//  chooseSort(arr)


/**
 * 快速排序
 */
function quickSort(arr){
    if(arr == null || arr.length == 0) {
        return [];
    }
    let mid = arr[0];
    let left = [];
    let right = [];
    for(let i = 1 ; i < arr.length; i++) {
        if(arr[i] > mid ){
            right.push(arr[i]);
        }else{
            left.push(arr[i]);
        }
    }

    left = quickSort(left);
    right = quickSort(right);
    left.push(mid);
    return left.concat(right);
}
// let newArr = quickSort(arr)
// console.log(newArr,'快速排序');


/**
 * 标准快速排序
 * 
 * 
 */


