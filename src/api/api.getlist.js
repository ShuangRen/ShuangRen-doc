module.exports = {
    title:'Api/getlist',
    name:'产品列表',
    methods:'GET',
    req:{
        'page':'页码',
        'count':'条数',
        'fn':'回调函数 因为接口太二笔 请直接填写 nocallback 否则将会返回非标准json格式'
    },
    res:{
        "status": "success",
        "message": "获取正常！",
        "data": [
            {
                "id": "7",
                "url": "/8/7.html",
                "title": "爱马仕1",
                "titles": "爱马仕1",
                "desc": "爱马仕",
                "descs": "爱马仕",
                "img": "/uploads/img/20150824/55dac3ac808f9.jpg",
                "imgcount": 1,
                "catid": "8",
                "catname": "饰品珠宝",
                "catename": "shipinzhubao",
                "modelid": "3",
                "click": "6612",
                "time": "2015-08-24"
            },
            {
                //xxxx
            }
        ],
      "imgcount": 10,
      "count": 10
    }
}