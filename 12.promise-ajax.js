let a;
function buy(callback) {
    setTimeout(()=>{
        a='蘑菇';
        callback(a)
    },2000)
}
buy(function cookie(val) {
    console.log(val);
});//回调函数，将后续的处理逻辑传入当前要做的事，当事情做完后调用次函数


/*promise解决回调问题
* 三个状态：成功-resolve、失败-reject、等待
*resolve,reject都是函数，then方法中有两个参数
* promise的实例就一个then方法
* */
let p=new Promise((resolve,reject)=>{
    //console.log(1);
    setTimeout(function () {
        let a='苹果';
        resolve(a);//reject()
    })
},2000);
p.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err);
});


/*例子*/
function buyPack() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.5){
                resolve('买')
            }else{
                reject('不买')
            }

        },Math.random()*1000)
    })
}
buyPack().then(function (data) {
    console.log(data)
},function (data) {
    console.log(data)
});

