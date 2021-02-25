/**
 * 普利姆算法
 * 
 */


 function Node(value) {
    this.value = value;
    this.neighbour = [];
 }

 let a = new Node('A');
 let b = new Node('B');
 let c = new Node('C');
 let d = new Node('D');
 let e = new Node('E');
 let pointSet = [a,b,c,d,e];
 let max = 10000;
 let distance = [
     [0,4,7,max,max],
     [4,0,8,6,max],
     [7,8,0,5,max],
     [max,6,5,0,7],
     [max,max,max,7,0]
 ];

 //得到'C'位于数组的第几位
 //遍历对应的二维数组
 function getIndex(pointSet,point){
    for(let i = 0 ;i < pointSet.length ; i++) {
        if(pointSet[i].value === point) {
            return i;
        }
    }
    return -1;
 }

 function getMinDistanceNode(pointSet,distance,nowPointset){
    let startNode = null;
    let minNode = null;
    let min = max;
    // nowPointset "C","A";
    for(let i = 0 ; i <nowPointset.length ; i++) {
        let index = getIndex(pointSet,nowPointset[i].value);
        for(let j = 0 ; j < distance[index].length ; j++) {
            if(distance[index][j] < min 
                && nowPointset.indexOf(pointSet[j]) < 0 ) {
                startNode = nowPointset[i];//开始的节点
                minNode = pointSet[j];     //结束的节点
                min = distance[index][j]   //最小的距离
            }
        }
    }
    startNode.neighbour.push(minNode);
    minNode.neighbour.push(startNode);
    return minNode;
 }

 function primMinTree(pointSet,distance,point) {
    let nowPointset = [];
    if(!pointSet || pointSet.length == 0) {
        return point;
    }
    if(!distance || distance.length == 0) {
        return point;
    }
    nowPointset.push(point);
    while(true) {
        let minDistanceNode = getMinDistanceNode(pointSet,distance,nowPointset);
        nowPointset.push(minDistanceNode);
        if(nowPointset.length === pointSet.length) {
            break;
        }
    }

 }

 primMinTree(pointSet,distance, c);
 console.log(pointSet)


