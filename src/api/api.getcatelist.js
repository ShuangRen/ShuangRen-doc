module.exports = {
    title:'Api/getlist',
    name:'栏目列表(type不同)',
    methods:'GET',
    req:{
        'cid':'栏目id (测试请输入2)',
        'page':'页码 (测试请输入1)',
        'count':'条数 (测试请输入2-10)',
        'type':'请填写category 因为接口太二笔 请直接填写category',
        'fn':'回调函数 因为接口太二笔 请直接填写 nocallback 否则将会返回非标准json格式'
    },
    res:{
        "status": "success",
        "message": "获取正常！",
        "data": [
            {
                "id": "3",
                "modelid": "1",
                "ename": "company",
                "name": "公司新闻",
                "son": null
            },
            {
                //xxxxxx
            },
        ]
    },
}