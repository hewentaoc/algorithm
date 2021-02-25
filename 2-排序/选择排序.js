/**
 * 选择排序
 * 内层循环 每一圈选出一个最小的
 * 任何一种排序算法，都没有优劣之分，只有是否适合的场景
 */

/**
 * 
 * 实现原理 每次循环得到一个最大值的索引
 * 然后将每次的最大值放在和最后面的值交换顺序  
 * 
 */

let arr = [4,2,6,9,1,5,8,7];

function chooseSort(arr) {
    if(arr == null || arr.length == 0) return;
    let temp;
    for(let i = 0 ; i < arr.length ; i++) {
        let maxIndex = 0;
        for(let j = 0 ; j < arr.length - i ; j++) {
            if(arr[maxIndex] < arr[j]) {
                maxIndex = j;
            }else{
                continue;
            }
        }
        temp = arr[maxIndex];
        arr[maxIndex] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

}
chooseSort(arr);
console.log('选择排序',arr);

