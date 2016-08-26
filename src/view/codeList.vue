<template>
    <div class="code_wrap">
        <table class="req_table">
            <tr class="header">
                <td width="20%">代码</td>
                <td width="80%">说明</td>
            </tr>
            <tr  v-for="(code,text) in items">
                <td width="10%">{{code}}</td>
                <td width="90%">{{text}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
 import codelist from '../config/config.code.js';   
export default {
    name:'codelist',
    data:()=>({
        items:codelist
    }),
}
</script>
<style lang="less">
    .code_wrap {
        width:80%;
        overflow:hidden;
        margin:0 auto;
        background:#fff;
        border-top:5px solid #2196f3;
        border-radius:4px;
        padding:25px;
        padding-top:40px;
        margin-bottom:30px;
        margin-top:30px;
        box-shadow:0 0 10px #999;
        .req_table {
            width:96%;
            border:1px solid #dcdcdc;
            border-collapse: collapse;
            border-spacing: 0;
            margin:20px auto;
            tr {
                width:100%;
                td{
                    border:1px solid #dcdcdc;
                    height:36px;
                    text-indent:25px;
                }
                &.header {
                    background:#f5f5f5;
                    color:#333;
                }
            }
        }
    }
</style>