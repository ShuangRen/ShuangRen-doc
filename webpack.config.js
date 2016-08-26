var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
	//项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
	entry: SRC_PATH,
	//输出的文件名 随机命名js文件
	output: {
		path: BUILD_PATH,
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
            	test: /\.less$/,
            	loader: 'style!css!less'
			},
			{
				test: /\.css$/,
				loader: 'style!css!less'
			},
			{  //对大于6000字节 的图片采取base64处理
				test: /\.(png|jpg|gif)$/,
				loader: 'url?limit=6000'
			},{
				test: /\.js$/, //js 加载器
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015'] //转换 es6编码为 es5
				}
			}, {
				test: /\.vue$/,  //vue 模板加载器
				loader: 'vue-loader'
			},
		]
	},
    resolve: {
    },
	//添加我们的插件 会自动生成一个html文件
	plugins: [
        //new webpack.optimize.CommonsChunkPlugin('jquery', 'jquery.js'),
		new HtmlwebpackPlugin({ //根据模板插入css/js等生成最终HTML
            //favicon:'./src/img/favicon.ico', //favicon路径
			title: 'docapi',
            filename:'./index.html',    //生成的html存放路径，相对于 path
            template:'src/index.html',    //html模板路径
            inject:true,    //允许插件修改哪些内容，包括head与bod
            hash:true,    //为静态资源生成hash值
            minify:{    //压缩HTML文件
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:false    //删除空白符与换行符
            }
		})
	]
};