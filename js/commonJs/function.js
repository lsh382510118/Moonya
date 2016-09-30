function tabFunc(obj,index){
    var a = [1,2,3,4,5,6,7,8];
    a.splice(4);              //返回[5,6,7,8];a=[1,2,3,4]
    a.splice(1,2);            //返回[2,3];a=[1,,4]
    a.splice(1,1);            //返回[4];a=[1]
    var a = [1,2,3,4,5];
    a.splice(2,0,'a','b');            //返回[];a=[1,2,'a','b',3,4,5]
    a.splice(2,2,[1,2],3);            //返回['a','b'];a=[1,2,[1,2],'3,3,4,5]

    var stack = [];                 //stack:[]
    stack.push(1,2);                //stack:[1,2]
    stack.pop();                    //stack:[1]
    stack.push(3);                  //stack:[1,3]
    stack.pop();                    //stack:[1]
    stack.push([4,5]);              //stack:[1,[4,5]]
    stack.pop();                    //stack:[1]
    stack.pop();                    //stack:[]

    var a = [];                   //stack:[]
    a.unshift(1);                 //stack:[1]
    a.unshift(22);                //stack:[22,1]
    a.shift();                    //stack:[1]
    a.unshift(3,[4,5]);           //stack:[3,[4,5],1]
    a.shift();                    //stack:[[4,5],1]
    a.shift();                    //stack:[1]
    a.shift();                    //stack:[]


    var data = [1,2,3,4,5];
    //计算数组元素的和值
    var sum = 0;                                        //初始0
    data.forEach(function(value){sum +=value;});        //将每个值累加到sum
    sum                                                 //  =>15
    //每个数组元素的值自加1
    data.forEach(function (v,i,a) {
        a[i]= v+1; })
    data                                                //  =>[2,3,4,5,6]

    var a=[1,2,3];
    b = a.map(function(x){return x*x;});                // b是[1,4,9]
}












































