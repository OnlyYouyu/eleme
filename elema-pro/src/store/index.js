import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        cityName:"选择地址",
        headerName:""
    },
    mutations:{
        changeCityName(state,params){
            state.cityName = params
        },
        changeHeaderName(state,params){
            console.log(params)
            state.headerName = params
        },
        orderHeaderName(state,params){
            console.log(params)
            state.headerName = params
        },
        mineHeaderName(state,params){
            state.headerName = params
        },
        foodName(state,params){
            state.headerName = params
        }
    }
})
export default store