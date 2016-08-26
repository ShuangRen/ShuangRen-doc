import http from './http.js';
import config from '../config/config.main.js';

export default {
    request(methods, apiurl, data, Fn, errFn) {
        let that = this;
        let url = config.domain + (config.public ? config.public : '') + apiurl;

        http.ajax(methods, url, data, config.headers).then((error, res)=>{
            if(error) {
                errFn&&errFn(error);
            }else {
                if(that.isJson(res)) {
                    Fn&&Fn(JSON.parse(res));
                }else {
                    Fn&&Fn(res);
                }
            }
        });
    },
    isJson : function(res){
        let info = true;
        try {
            //在此运行代码
            JSON.parse(res);
            info = true;
        } catch(err) {
            info = false;
        }

        return info;
    }
}