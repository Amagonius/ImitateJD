<template>
    <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler"></cube-form>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                model:{
                    username:'',
                    password:''
                },
                schema:{
                    fields:[
                        {//用户名配置
                            type:'input',
                            modelKey:'username',
                            label:'用户名',
                            props:{
                                placeholder:'请输入用户名',
                            },
                            rules:{
                                //校验规则
                                require:true,
                                type:'string',
                                min:3,
                                max:15
                            },
                            trigger:'blur',  //失焦触发
                            message:{
                                require:'用户名不能为空',
                                min:'用户名不能少于3个字符',
                                max:'用户名不能多于15个字符'
                            }
                        },
                        {//密码配置
                            type:'input',
                            modelKey:'password',
                            label:'密码',
                            props:{
                                placeholder:'请输入密码',
                                type:'password',
                                eye:{
                                    open:false
                                }
                            },
                            rules:{
                                //校验规则
                                require:true,
                            },
                            trigger:'blur',  //失焦触发
                        },
                        {
                            type:'submit',
                            label:'登录'
                        }
                    ]
                }
            }
        },
        methods:{
            async submitHandler(e){
                e.preventDefault()
                try{
                    const result=await this.$http.get('/api/login',{
                        params:this.model
                    })
                    if(result.code===0){
                        this.$store.commit('setToken',result.token)
                        window.localStorage.setItem('token',result.token)
                        this.$router.replace({path:'/botnav/index'})
                    }else{
                        alert(result.message)
                    }
                }catch(err){
                    console.log(err)
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>