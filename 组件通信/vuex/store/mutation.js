import * as Types from 'mutation-types'
const mutations={
    [Types.INCREMENT](state,count){//state是自动放入的，默认就是当前的state
        state.count+=count
    },
    [Types.DECREMENT](state,count){
        state.count-=count
    }
}
export default mutations;