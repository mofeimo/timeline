import { createStore } from 'vuex'
import cache from './modules/cache'
import getters from './getters'

const store = createStore({
    modules: {
        cache
    },
    getters
})

export default store