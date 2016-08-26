<template>
    <div class="left_warp" :class="{'showActive':leftshow}">
        <input type="text" v-model="searchText" class="textInput" placeholder="输入要查询的接口名或关键字" @input="onSearchInput"/>
        <ul>
            <li v-for="(key, item) in apiList" @click="onSelectApi(key)">
                <p>{{key}}</p>
                <span>{{item}}</span>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    name:'left',
    props:['apiconf','leftshow'],
    data:()=>({
        apiList:{},
        searchText:''
    }),
    ready() {
        let that = this;
        that.apiList = that.apiconf;
    },
    methods:{
        onSearchInput() {
            let that = this;
            if(that.searchText == '') {
                that.apiList = that.apiconf;
                return;
            }

            that.apiList = {};
            for(let item in that.apiconf) {
                let str = item;
                if(str.toLowerCase().indexOf(that.searchText.toLowerCase()) != -1) {
                    that.apiList[item] = that.apiconf[item];
                }
            };
        },
        onSelectApi(key) {
            this.$route.router.replace('/view/' + key);
            this.$dispatch('leftShowMsg', false);
            //this.$dispatch('leftItem', item);
        }
    }
}
</script>
<style lang="less">
    .left_warp {
        width:400px;
        height:100%;
        overflow-y:auto;
        background:#fff;
        z-index:2;
        position:absolute;
        left:0;
        top:0;
        box-shadow:0 0 15px #333;
        -webkit-transform:translateX(-100%);
        -moz-transform:translateX(-100%);
        -ms-transform:translateX(-100%);
        -o-transform:translateX(-100%);
        transform:translateX(-100%);
        
        -webkit-transition:all .1s;

        .textInput {
            width:92%;
            height:40px;
            border:1px solid #dcdcdc;
            border-radius:4px;
            line-height:40px;
            text-indent:10px;
            color:#333;
            margin:20px auto;
            display:block
        }
        ul {
            width:100%;
            overflow:hidden;
            li {
                width:92%;
                height:auto;
                min-height:52px;
                padding-bottom:10px;
                margin:0 auto;
                border-bottom:1px solid #e3e3e3;
                cursor:pointer;
                p {
                    font-size:16px;
                    line-height:30px;
                    color:#333;
                }
                span {
                    font-size:14px;
                    color:#999;
                }
            }
        }
        &.showActive {
            -webkit-transform:translateX(0);
            -moz-transform:translateX(0);
            -ms-transform:translateX(0);
            -o-transform:translateX(0);
            transform:translateX(0);
        }
    }    
</style>