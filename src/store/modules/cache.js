import store from '../../store'

const cahce = {
    state: {
        count: 0,
    },
    mutations: {
        setcount: (state, count) => { state.count = count },
        addcount: (state) => { state.count+=1 }
    },
    actions: {
        count({commit}, a){
            commit('addcount');
        },
        getcount({commit,state}){
            
        }
    }
}
export default cahce