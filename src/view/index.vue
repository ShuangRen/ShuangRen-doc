<template>
    <div class="index_wrap">
        <div class="in_wrap">
            <h2 class="page-header">打包配置</h2>
            <p>1.安装nodejs</p>
            <p>2.执行npm install</p>
            <p>3.执行npm run build</p>
            <p>4.打开build文件夹下的index.html</p>
        </div>

        <div class="in_wrap in_wrap2">
            <h2 class="page-header">使用手册</h2>
            <p>1.config／config.code.js 用于书写错误码，按规则填写即可</p>
            <p>2.config／config.api.js 用于遍历，每个接口对应一个 key->value  比如 userlist：用户列表， 按示范填写即可</p>
            <p>3.api／api.xx.js 则是接口文档，注意xx对应上一步的 config.api.js中的 key ，需要一致，比如userlist ，这里文件名则为api.userlist.js</p>
            <p>4.api／api.xx.js参数说明：title：接口地址，name：中文名，methods：请求方式，req：请求参数，res：返回参数</p>
            <p>5.config／config.main.js 配置文件，参数有：domain：接口域名， public：每个接口公共的参数，如index.php，没有可不填， headers：请求头，没有可不填</p>
            <p>6.关于js请求跨域解决：1.使用proxy服务器代理，2.接口的header 里 增加Access-Control-Allow-Origin:＊， 3.配置chorme参数实现允许跨域访问</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'index',
    
}
</script>
<style lang="less">
   .in_wrap {
        width:80%;
        overflow:hidden;
        margin:0 auto;
        background:#fff;
        border-top:5px solid #2196f3;
        border-radius:4px;
        padding:25px;
        margin-bottom:30px;
        margin-top:30px;
        box-shadow:0 0 10px #999;
        p {
            font-size:16px;
            line-height:24px;
            margin-top:10px;
        }
   }
   .page-header {
        font-size:18px;
        font-weight:100;
        margin:25px 0 10px;
    }
    .in_wrap2 {
        border-top:5px solid #4caf50;
    }
</style>