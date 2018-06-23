<template>
    <div>
        计数器：<button @click="jian">-</button>
        <br>
        当前：{{$store.count}}<br>
        计数器：<button @click="add">+</button>
        {{$store.getters.val}}
    </div>
</template>
<script>
    import * as Types from './store/mutation-types'
    export default {
        data(){
            return {}
        },
        created(){},
        methods:{
            add(){
                //提交add的mutation
                //第一个参数对应的方法，第二个是statede改变程度
                this.$store.commit(Types.INCREMENT,2)
            },
            jian(){
                this.$store.commit(
                    Types.DECREMENT,1)
            }
        },
        computed:{}
    }
</script>
<style scoped></style>