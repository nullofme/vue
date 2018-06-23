import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/l';//引入查看日志的插件
Vue.use(Vuex);

import mutations from './mutation';

const state={
    count:0
};
const getters={
    val:(state)=>state.count%2?'奇数':'偶数'

};//计算
export default  new Vuex.Store({
    state,
    mutations,
    strict:true,//只能通过mutation(管理员)来改状态mutation支持异步
    plugins:[logger()]//查看日志的插件
})