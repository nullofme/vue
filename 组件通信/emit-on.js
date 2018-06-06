function Girl() {
    this._events={}
}
Girl.prototype.on=function (eventName,callBack) {
    if(this._events[eventName]){//不是第一次
        this._events[eventName].push(callBack);
        //{失恋：[cry,eat,shopping]}
    }else{
        this._events[eventName]=[callBack]
    }
};
Girl.prototype.emit=function (eventName,...args) {
    if(this._events[eventName]){
        this._events[eventName].forEach(cb=>cb(...args))
    }
};
let girl=new Girl();
let cry=(who)=>{console.log(who+'哭')};
let shopping=(who,ni)=>{console.log(ni+'购物')};
let eat=(who)=>{console.log(who+'吃')};
girl.on('失恋',cry);//失恋：[cry]
girl.on('失恋',eat);//失恋：[cry,eat]
girl.on('失恋',shopping);//失恋：[cry,eat,shopping]

girl.emit('失恋','我','你');