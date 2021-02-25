/**
 * 原始排序
 */

 let arr = [1,4,2,6,7,4,9,7,5];

 function sort(arr) {
    if(arr == null || arr.length == 0) return;
    let newArr = new Array(arr.length);
    for(let i = 0 ; i < newArr.length ; i++) {
        newArr[i] = getMin(arr);
    }
    return newArr;
 }

//  let news = sort(arr);
//  console.log(news);

 function getMin(arr) {
    if(arr == null || arr.length == 0) return;
    let index = -1;
    for(let i = 0 ; i < arr.length ;i++) {
        if(arr[index] > arr[i] && arr[i] != null || index == -1 && arr[i] != null)  {
            index = i;
        }
    }
    let returnVal =  arr[index];
    arr[index] = null;
    return returnVal;
 }


 /**
  * 
  * 冒泡排序
  * 
  * 相邻两个元素进行交换排序
  * 
  * 冒泡排序是把每次循环是把最大或者最小的值放在最后
  * 所以为了性能,每比较一次,第二次就少比较一次
  */

  function bubbling(arr) {
    if(arr == null || arr.length == 0) return;
    let temp;
    for(let i = 0 ;i < arr.length ;i++) {
        for(let j = 0; j < arr.length -1 - i ;j ++) {
            if(arr[j] > arr[j+1]){
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }else{
                continue;
            }
        }
    }
  }

//   let bubbl = bubbling(arr);
//   console.log('我是冒泡',arr)


/**
 * 选择排序
 * 内层循环 每一圈选出一个最小的
 * 任何一种排序算法，都没有优劣之分，只有是否适合的场景
 */

  // 比较难理解1
  function changeSort1(arr) {
    if(arr == null || arr.length == 0) return;
    let temp;
    for(let i = 0; i < arr.length ;i ++) {
        let minIndex = i;
        for(let j = i ; j < arr.length ; j ++) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j;
            }else{
                continue;
            }
        }
        temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
  }

//   changeSort1(arr);
//   console.log(arr);


function changeSort2 (arr) {
    if(arr == null || arr.length == 0) {
        return;
    }
    let temp ;
    for(let i = 0 ;i < arr.length ; i ++) {
        let maxIndex = 0;
        for(let j = 0 ; j < arr.length - i ; j++) {
            if(arr[maxIndex] < arr[j]) {
                maxIndex = j;
            }else{
                continue;
            }
        }
        console.log(maxIndex,arr.length -1 - i)
        temp = arr[maxIndex];
        arr[maxIndex] = arr[arr.length -1 - i];
        arr[arr.length -1 - i] = temp;
    }
}




















//   function choose(arr) {
//     if(arr == null || arr.length == 0) return;
//     let temp;
//     for(let i = 0 ; i < arr.length ;i++) {
//         for(let j = i + 1 ; j < arr.length ; j++) {
//             if(arr[i] > arr[j]) {
//                 temp = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = temp;
//             }else{
//                 continue;
//             }
//         }
//     }
//     return arr;
//   }

//   let bubbl = choose(arr);
 




