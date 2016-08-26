/**
 * Created by yinhuang on 16/7/24.
 */
// require("!style!css!less!./less/index.less");

import Vue from 'vue';
import Router from 'vue-router';
import Main from './main.vue';
//require('bootstrap'); 第一期用不到bs

Vue.use(Router);

const router = new Router();

router.map({
    '/index': {
        name: 'index', //index
        component: function (resolve) {
            require(['./view/index.vue'], resolve);
        },
    },
    '/view/*any': {
        name: 'view', //详情
        component: function (resolve) {
            require(['./view/apiView.vue'], resolve);
        },
    },
    '/codelist': {
        name: 'codelist', //详情
        component: function (resolve) {
            require(['./view/codelist.vue'], resolve);
        },
    },
    // '/type': {
    //     name: 'type', //全局样式
    //     component: function (resolve) {
    //         require(['./component/type.vue'], resolve);
    //     },
    // },
    // '/ui': {
    //     name: 'ui', //全局样式
    //     component: function (resolve) {
    //         require(['./component/ui.vue'], resolve);
    //     },
    // },
    // '/uis': {
    //     name: 'uis', //全局样式
    //     component: function (resolve) {
    //         require(['./component/uis.vue'], resolve);
    //     },
    // },
    // '/ue': {
    //     name: 'ue', //全局样式
    //     component: function (resolve) {
    //         require(['./component/ue.vue'], resolve);
    //     },
    // },
    // '/common': {
    //     name: 'commonui', //全局样式
    //     component: function (resolve) {
    //         require(['./component/common.vue'], resolve);
    //     },
    // },
});

router.redirect({
    '*':'/index'
});

router.start(Main, '#my-app');