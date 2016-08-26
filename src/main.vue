<template>
    <div class="top_wrap">
        <left-view :apiconf="apiConf" :leftshow="leftShow"></left-view>
        <div class="modal" v-show="leftShow" @click="onCloseLeft"></div>
        <div class="header">
            <ul>
                <li @click="onShowApiList">API列表</li>
                <li><a v-link="{path:'/codelist'}">错误码列表</a></li>
                <li ><a v-link="{path:'/index'}">使用手册</a></li>
            </ul>
        </div>
        <router-view :items="apiData" :inputdata="inputData"></router-view>
    </div>
</template>
<script>
import apiConf from './config/config.api.js';

import apiView from './view/apiView.vue';
import leftView from './view/leftView.vue';
export default {
    name:'main',
    data:()=>({
        apiConf:{},
        apiData:{},
        inputData:{},
        leftShow:false
    }),
    components:{
        'api-view':apiView,
        'left-view':leftView
    },
    created() {
        let that = this;
        that.apiConf = apiConf;
    },
    methods:{
        onShowApiList() {
            this.leftShow = true;
        },
        onCloseLeft() {
            this.leftShow = false;
        },
        onInclude(item) {
            this.apiData = {};
            let apiUrl = './api'+ '/api.' + item + '.js';
        
            let apiModule = require(apiUrl);
            let apiModuleList = {};
            for(let v in apiModule) {
                apiModuleList[v] = apiModule[v];
            }

            this.apiData = apiModuleList;
            let list = {};
            for(let v in this.apiData.req) {
                list[v] = '';
            }
            this.inputData = list;
        },
    },
    events:{
        leftShowMsg(msg) {
            this.leftShow = msg;
        },
        leftItem(msg) {
            this.onInclude(msg);
        }
    }
}
</script>
<style>
    html,
    body,
    p,
    ul,
    li,
    dl,
    dt,
    dd,
    input,
    label {
        margin: 0;
        border: 0;
        padding: 0;
    }
    
    html,
    body {
        height: 100%;
        /*background:#EEE url(./images/common/body.png) center 546px no-repeat;*/
        background-color: #ecedf1;
        font-size: 14px;
        color: #666;
        min-height: 400px;
    }
    
    ul,
    li,
    dl,
    dt,
    dd {
        list-style: none;
    }
    
    body,
    input {
        font-family: '微软雅黑', '宋体', arial, 'Hiragino Sans GB', 'Microsoft Yahei', \5b8b\4f53, Tahoma, Arial, Helvetica, STHeiti !important;
    }
    /*隐藏IE浏览器自带的文本删除按钮和密码查看按钮*/
    
    ::-ms-clear,
    ::-ms-reveal {
        display: none;
    }
    
    * {
        outline: 0 none!important;
    }
    
    .clearfix:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    
    .disNone {
        display: none !important;
    }
    
    ::-moz-placeholder {
        color: #A9A9A9;
    }
    
    ::-webkit-input-placeholder {
        color: #A9A9A9;
    }
    
    :-ms-input-placeholder {
        color: #A9A9A9;
    }
    
    html,
    body {
        height: 100%;
        width: 100%;
    }
    
    * {
        margin: 0;
        padding: 0;
    }
    
    .top_wrap {
        height: 100%;
        position:relative;
    }
    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
    
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: #F5F5F5;
    }
    /*定义滚动条轨道 内阴影+圆角*/
    
    ::-webkit-scrollbar-track {
        /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
        /*border-radius: 10px;*/
        background-color: #F5F5F5;
    }
    /*定义滑块 内阴影+圆角*/
    
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);*/
        background: rgba(102, 102, 102, 0.5);
    }
    .modal {
        width:100%;
        height:100%;
        position:fixed;
        left:0;
        top:0;
        background:rgba(0,0,0,0.3);
        z-index:1;
    }
    .header {
        width:100%;
        height:42px;
        line-height:42px;
        background:#666;
        color:#fff;
    }
    .header ul {
        width:100%;
        height:100%;
    }
    .header ul li {
        width:140px;
        height:100%;
        text-align:center;
        position:relative;
        float:left;
    }
    .header ul li:after {
        content:'';
        width:1px;
        height:60%;
        background:#fff;
        position:absolute;
        top:20%;
        right:0;
    }
    .header ul li:last-child:after {
        content:'';
        width:0;
        height:0;
        background:none;
    }
    .header ul li a {
        width:100%;
        height:100%;
        display:block;
        color:#fff;
        text-decoration:none;
        cursor:pointer
    }
</style>
