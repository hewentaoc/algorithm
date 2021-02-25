/**
 * 克鲁斯卡尔算法
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

function canLink(resultlist,tempStart,tempEnd) {
    let start = null;
    let end = null;
    for(let i = 0 ; i <resultlist.length ;i ++) {
        if(resultlist[i].indexOf(tempStart) > -1) {
            start = resultlist[i];
        }
        if(resultlist[i].indexOf(tempEnd) > -1) {
            end = resultlist[i];
        }
    }
    //两个都是新点，可以连接
    //一个新点、一个部落
    //两个部落
    //一个部落的两个点 连不了
    if(start != null && end != null && start == end) {
        return false;
    }
    return true;
}

function link(resultlist,tempStart,tempEnd){
    let start = null;
    let end = null;
    for(let i = 0 ; i <resultlist.length ;i ++) {
        if(resultlist[i].indexOf(tempStart) > -1) {
            start = resultlist[i];
        }
        if(resultlist[i].indexOf(tempEnd) > -1) {
            end = resultlist[i];
        }
    }
    if(start == null && end == null) {
        let arr = [];//一个部落
        arr.push(tempStart);
        arr.push(tempEnd);
        resultlist.push(arr);
    }else if (start != null && end == null) {
        start.push(tempEnd);
    }else if(start == null && end !=null) {
        end.push(tempStart);
    }else if(start != null && end != null && start != end) {
        let assign = start.concat(end);//合并两个部落
        let index = resultlist.indexOf(start);
        resultlist.splice(index,1);//删除end部落
        index = resultlist.indexOf(end);
        resultlist.splice(index,1);
        resultlist.push(assign);
    }
    tempStart.neighbour.push(tempEnd);
    tempEnd.neighbour.push(tempStart);
}

function kruskar(pointSet,distance){
    let resultlist = [];
    let i = 0;
    while(true) {
        let start = null;
        let end = null;
        let min = max;
        for(let i = 0 ; i < distance.length ; i++) {
            for(let j = 0 ; j < distance[i].length ; j ++) {
                let tempStart = pointSet[i];//临时的起点
                let tempEnd = pointSet[j];  //临时的终点 AA AB
                if(i!=j //自身的点去掉
                   && distance[i][j] < min
                   && canLink(resultlist,tempStart,tempEnd)//判断是否可以相连
               ){
                    min = distance[i][j];
                    start = tempStart;
                    end = tempEnd;
                }
            }
        }
        link(resultlist,start,end);
        if(resultlist.length == 1 && resultlist[0].length == pointSet.length) {
            break;
        }
    }
}
kruskar(pointSet,distance)
console.log(pointSet);
