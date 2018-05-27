function ajax(url='',type='get',dataType='json') {
    return new Promise((resolve,reject)=>{
        let xhr=new  XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.responseType=dataType;
        xhr.onload=function () {//xhr.readState==4  xhr.status===200
            if(xhr.status===200){
                resolve(xhr.response)
            }else{
                reject('not found')
            }
        };
        xhr.onerror=function (err) {
            reject(err);//失败调用失败的方法
        };
        xhr.send();
    })
}
/*ajax({url:'./carts.json'}).then(res=>{
this.products=res;
},err=>{
    console.log(err);
})*/
/*
$.ajax({
    url:'',
    data:{},
    type:'get',
    dataType:'json',
    success
})*/
