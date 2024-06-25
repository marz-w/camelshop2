import Vuex from 'vuex'

// add this
import products from './modules/products';
import cart from './modules/cart';

export default new Vuex.Store({
    state: {},
    getters: {},
    actions: {},
    mutations: {},
    modules:{
        // add this
        products,
        cart
    }
})