//vuex  平级组件交互，找共同的父级解决；跨组件交互  eventBus

//vuex主要借鉴了flux redux，vuex只能在vue中使用

//vuex为了大型项目，主要是状态管理，将数据统一管理
import Vue from 'vue';
import App from './App.vue';
import store from './store';
new Vue({
    el:'#app',
    ...App,
    store,
    //store被注册到了实例上，所有的组件都会有一个属性this.$store

})