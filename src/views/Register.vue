<template>
    <div id="register">
        <cube-form
                :model="model"
                :schema="schema"
                @submit="submitHandler"></cube-form>
    </div>
</template>

<script>
    export default {
        name: "Register",
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
                            label:'注册'
                        }
                    ]
                }
            }
        },
        methods:{
            submitHandler(e){
                e.preventDefault()
                this.$http.get('/api/register',{
                    params:this.model
                }).then(res=>{
                    this.$router.replace({path:"/login"})
                    console.log(res.success)
                }).catch(err=>{
                    console.log(err)
                })
                }
        }
    }
</script>

<style lang="stylus" scoped>

</style>