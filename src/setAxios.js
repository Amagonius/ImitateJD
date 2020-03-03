import axios from 'axios'
import store from './store'
import router from "./router"

//http全局拦截，token通过header返回给后端
export default function setAxios() {
    axios.interceptors.request.use(
        config=>{
            if(store.state.token){
                config.headers.token=store.state.token
            }
            return config
        }
    )
    axios.interceptors.response.use(
        response=>{
            if(response.status===200){
                const data=response.data
                if(data.code===-1){
                    //登录过期，重新登录，清空token
                    store.commit('setToken','')
                    localStorage.removeItem('token')
                    router.replace({path:'/login'})
                }
                return data
            }
            return response
        }
    )
}