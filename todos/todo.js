let vm = new Vue({
    el:'#app',
    data:{
        todos: [
            {isSelected:true,title:'晚上回家睡觉'},
            {isSelected:true,title:'晚上看电视'},
            {isSelected:true,title:'晚上洗澡'}
        ],
        todo:{
            isSelected:false,
            title:""
        },
        hash:'all',//默认是全部的，页面刷新的时候变化，hashchange事件
        cur:'',//用来标识当前点击的是哪一个
    },
    created(){
        this.todos=JSON.parse(localStorage.getItem('todos')) ||this.todos;
        this.hash=window.location.hash.slice(2)||'all';//页面刷新也会获取hash
        window.addEventListener('hashchange',()=>{
            //当hash值变化，重新操作记录的数据
            this.hash=window.location.hash.slice(2);
        },false);/*监控hash值的变化*/
      },
    computed:{
        count:{
            get(){
                //计算数组里 有多少个没勾选的
                return this.todos.filter(item=>!item.isSelected).length
            }
        },
        newTodos(){
            //根据todos计算出全部 ——未完成 ——已完成
            if(this.hash === 'all'){
                return this.todos
            }else if(this.hash === 'finish'){
                return this.todos.filter(item=>item.isSelected);
            }else{
                return this.todos.filter(item=>!item.isSelected);
            }
        }
    },
    methods:{
        remove(g){ //g代表当前要删除掉这一项，去数组里过滤掉
            //返回true表示 放到新数组中，返回的是最终的新数组 要覆盖掉老数组
            this.todos=this.todos.filter(item=>item!==g);
        },
        addOne(){
            this.todos.unshift(this.todo);
            //赋予一个新对象，防止每次放入的对象都是同一个，并且添加成功后，当前输入框的值为空
            this.todo = {isSelected:false,title:''}
        },
        change(cur){/*双击那个，c的值就等于那一项*/
            this.cur=cur
        },
        cancel(){
            this.cur=""
        }
    },
    watch:{ //默认只监控一层。对象中的数据发生变化是不会触发watch的
        todos:{//只要todos发生变化就执行 此函数
            handler(){
                localStorage.setItem('todos',JSON.stringify(this.todos))
            },
            deep:true //深度监控，对象中数据变化也会被监控到
        }
    },
    directives:{//指令，用来添加一些功能，或者操作DOM
        autoFocus(el,bindings){//el代表当前输入框,bindings是对象绑定的数据，value是true获取焦点
            /* console.log(arguments)
              0:input
              1:Object
                def:Object
                expression:"item==c"
                modifiers:Object
                name:"auto-focus"
                rawName:"v-auto-focus"
                value:false*/
            if(bindings.value) el.focus();
        }
    }
});
//spa 单页开发，不跳转页面
//路由： 不同的路径，显示不同的内容，浏览器路径发生变化就会产生历史管理
//hash 锚点   开发时一般用 hash
//h5 自带的api方法 没有 # 号，但是需要服务端支持，在开发时使用如果刷新页面会导致404 history.pushState
///监听hash值的变化
//window.location

//sessionStorage localStorage cookie 4k