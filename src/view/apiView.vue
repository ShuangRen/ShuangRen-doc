<template>
    <div class="apiView_wrap">
        <div class="top_req">
            <h1 class="name">{{items.name}}</h1>
            <p class="title">{{items.title}}</p>

            <h2 class="page-header">请求参数</h2>
            <table class="req_table">
                <tr  v-for="(name,text) in items.req">
                    <td width="20%">{{name}}</td>
                    <td width="80%">{{text}}</td>
                </tr>
            </table>

            <h2 class="page-header">返回参数</h2>
            <pre class="pre">{{items.res}}</pre>
            
        </div>
        
        <div class="top_req middle_req">
            <h2 class="page-header">{{items.title}}</h2>
            <template v-for="(index,item) in inputdata">
                <h4 class="form-head">{{items.req[index]}} ({{index}})</h4>
                <input type="text" class="inputtext" v-model="inputdata[index]">
                <br/>
            </template>
            <input type="button" class="send_btn" value="send" @click="apiSend"/>
        </div>

        <div class="top_req bottom_req">
            <h2 class="page-header">Request</h2>
            <pre class="pre">{{requresItem}}</pre>
        </div>
    </div>
</template>
<script>
import apiConf from '../config/config.api.js';
import req from '../libs/request.js';
export default {
    name:'apiView',
    data:()=>({
       apiName:'',
       requresItem:''
    }),
    props:['items','inputdata'],
    route:{
            canReuse: false, //此组件不能被重用,每次必然重新加载
    },
    created() {
        let anyArr = this.$route.params.any.split('/');

        this.apiName = anyArr[0];

        this.$dispatch('leftItem', this.apiName);
    },
    attached() {
        let that = this;
        setTimeout(()=>{
            that.items.res = JSON.stringify(that.items.res,null,4);
        },100);
    },
    methods:{
        apiSend() {
            let that = this;
            req.request(that.items.methods, that.items.title, that.inputdata, function (res) {
                that.requresItem =JSON.stringify(res,null,4);
            }, function (err) {
                that.requresItem = err
            });
        }
    }
}
</script>
<style lang="less">
    .apiView_wrap {
        width:80%;
        overflow:hidden;
        margin:0 auto;
        padding-top:40px;
    }
    .pre {
        width:75%;
        overflow:hidden;
        padding:25px 0;
        background:#F5F5F5;
        border:1px solid #dcdcdc;
        border-radius:4px;
        text-align:left;
        padding-left:5%;
        line-height:24px;
    }
    .pre_4 {
        margin-left:20px;
        display:inline-block;
    }
    .pre_3 {
        margin-left:15px;
        display:inline-block;
    }
    .top_req {
        overflow:hidden;
        background:#fff;
        border-top:5px solid #2196f3;
        border-radius:4px;
        padding:25px;
        margin-bottom:30px;
        box-shadow:0 0 10px #999;
        .name {
            font-size:24px;
            font-weight:100;
        }
        .title {
            font-size:18px;
            color:#999;
        }
        .page-header {
            font-size:18px;
            font-weight:100;
            margin:25px 0 10px;
        }
        .req_table {
            width:80%;
            border:1px solid #dcdcdc;
            border-collapse: collapse;
            border-spacing: 0;
            margin-top:20px;
            tr {
                width:100%;
                td{
                    border:1px solid #dcdcdc;
                    height:36px;
                    text-indent:25px;
                }
            }
        }
    }
    .middle_req {
        border-top:5px solid #4caf50;
        .inputtext {
            width:60%;
            height:40px;
            line-height:40px;
            border:1px solid #dcdcdc;
            border-radius:4px;
            text-indent:10px;
        }
        .page-header {
            margin-top:10px;
            padding-bottom:20px;
            border-bottom:1px solid #dcdcdc;
            margin-bottom:30px;
            font-size:24px;
            color:#333;
        }
        .form-head {
            font-weight:100;
            font-size:16px;
            color:#666;
            margin:15px 0 5px;
        }
        .send_btn {
            width:100px;
            height:40px;
            line-height:40px;
            text-align:center;
            color:#fff;
            background:#4caf50;
            border:none;
            border-radius:4px;
            margin-top:20px;
            cursor:pointer;
            &:hover {
                background:#2E8932
            }
            &:active {
                background:#155D18
            }
        }
    }
    .bottom_req {
        border-top:5px solid #ffeb3b;
        .pre {
            background:#fff;
        }
    }
</style>