module.exports = {
    configureWebpack:{
        devServer:{
            //启动浏览器自动打开项目
            open:true,
            //mock接口数据
            before(app){
                //用户数据库
                let userDB=[
                    {username:'qqqq',password:'123456'},
                    {username:'aaaa',password:'123456'}
                ]
                //注册接口
                app.get('/api/register',(req,res)=>{
                    const {username,password}=req.query
                    const userLength=userDB.filter(v=>v.username===username).length
                    if(userLength>0){
                        res.json({
                            success:false,
                            message:'该用户已存在'
                        })
                    }else{
                        res.json({
                            success:true,
                            message:'注册成功'
                        })
                    }
                })
                //登录接口
                let tokenkey='december'
                app.get('/api/login',(req,res)=>{
                    const {username,password}=req.query
                    if(username==='qqqq'&&password==='123456'||username==='aaaa'&&password==='123456'){
                        res.json({
                            code:0,
                            message:'登录成功',
                            token:tokenkey+'-'+username+'-'+(new Date().getTime()+60*60*1000)
                        })
                    }else{
                        res.json({
                            code:1,
                            message:'账号或密码错误'
                        })
                    }
                }),
                //首页轮播图数据接口
                app.get('/api/banners',(req,res)=>{
                    res.json({
                        data:[
                            {
                            url: 'https://m.jd.com/',
                            image: 'https://imgcps.jd.com/ling4/100004559325/5omL5py66LSt5a6e5oOg/5aSH6LSn6LaF5YC8/p-5c1361ed82acdd181dd72139/022aa04a/cr_1125x445_0_171/s1125x690/q70.jpg'
                            },
                            {
                                url: 'https://m.jd.com/',
                                image: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/102426/7/13802/88777/5e5cb049E605b99fa/1911a1e8c8c62977.jpg!cr_1125x445_0_171!q70.jpg.dpg'
                            },
                            {
                                url: 'https://m.jd.com/',
                                image: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/91809/30/13559/128067/5e5cc848E96980871/f3d3a9f19ed3826f.jpg!cr_1125x445_0_171!q70.jpg.dpg'
                            }]
                    })
                }),
                    //滚动分类接口
                    app.get('/api/tags',(req,res)=>{
                        res.json({
                            data:[
                                [
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp',
                                        label:'京东超市'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png.webp',
                                        label:'数码电器'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp',
                                        label:'京东服饰'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png.webp',
                                        label:'京东生鲜'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t20860/204/215345958/6866/139dc352/5b03b902N8cc08b40.png.webp',
                                        label:'排行榜'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp',
                                        label:'充值缴费'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp',
                                        label:'9.9元拼'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp',
                                        label:'领券'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp',
                                        label:'赚钱'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png.webp',
                                        label:'PLUS会员'
                                    },
                                ],
                                [
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/89640/36/2804/8167/5dd6aca9E4b04fedd/fbc6adc345138b30.png.webp',
                                        label:'京东国际'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/32245/22/2820/6521/5c6df9b3E1466dcd3/9f4cd68276f4e971.png.webp',
                                        label:'京东拍卖'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/25651/12/1391/4836/5c120c34Eb93a70fa/3a1735f6a79d0721.png.webp',
                                        label:'唯品会'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t28723/45/1332082024/6421/ead422d3/5cdd0be3Nfce1ba98.jpg.dpg',
                                        label:'玩3C'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/19699/10/1440/6755/5c120ca6Eaa521f62/f9d57f39e55c7321.png.webp',
                                        label:'沃尔玛'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/19745/21/1415/4886/5c120cbbEe58af0bf/4d19bf58d42fc9c4.png.webp',
                                        label:'美妆馆'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/27748/22/1419/4913/5c120d0eEa52ea62f/3c2b78a40edc97b2.png.webp',
                                        label:'京东旅行'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/14996/29/2195/11094/5c1afdb7Ee54cf069/d6ab6a0f64fee068.png.webp',
                                        label:'拍拍二手'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png.webp',
                                        label:'物流查询'
                                    },
                                    {
                                        url: 'https://m.jd.com/',
                                        image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/28873/5/1455/6885/5c120bb9Eb6610bee/29d349f92aeb6eaf.png.webp',
                                        label:'全部'
                                    },
                                ],
                            ]
                        })
                    }),
                    //获取分类页的分类接口
                    app.get('/api/classify',(req,res)=>{
                        switch(req.query.type){
                            case '0':
                                res.json({
                                    data:[
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },

                                    ]
                                });
                                break;
                            case '1':
                                res.json({
                                    data: [
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                    ]
                                });
                                break;
                            case '2':
                                res.json({
                                    data: [
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                    ]
                                });
                                break;
                            case '3':
                                res.json({
                                    data: [
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                    ]
                                });
                                break;
                            case '4':
                                res.json({
                                    data: [
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                    ]
                                });
                                break;
                            case '5':
                                res.json({
                                    data: [
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                    ]
                                });
                                break;
                            case '6':
                                res.json({
                                    data: [
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                        {
                                            image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                            label:'小米'
                                        },
                                    ]
                                });
                                break;
                        }
                    })
            }
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
