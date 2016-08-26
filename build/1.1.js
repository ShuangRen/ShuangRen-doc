webpackJsonp([1],{

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(44)
	__vue_script__ = __webpack_require__(46)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/view/codelist.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(47)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./codelist.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(45);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./codelist.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./codelist.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ".code_wrap {\n  width: 80%;\n  overflow: hidden;\n  margin: 0 auto;\n  background: #fff;\n  border-top: 5px solid #2196f3;\n  border-radius: 4px;\n  padding: 25px;\n  padding-top: 40px;\n  margin-bottom: 30px;\n  margin-top: 30px;\n  box-shadow: 0 0 10px #999;\n}\n.code_wrap .req_table {\n  width: 96%;\n  border: 1px solid #dcdcdc;\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 20px auto;\n}\n.code_wrap .req_table tr {\n  width: 100%;\n}\n.code_wrap .req_table tr td {\n  border: 1px solid #dcdcdc;\n  height: 36px;\n  text-indent: 25px;\n}\n.code_wrap .req_table tr.header {\n  background: #f5f5f5;\n  color: #333;\n}\n", ""]);

	// exports


/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _configCode = __webpack_require__(30);

	var _configCode2 = _interopRequireDefault(_configCode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'codelist',
	    data: function data() {
	        return {
	            items: _configCode2.default
	        };
	    }
	};

/***/ },

/***/ 47:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"code_wrap\">\n    <table class=\"req_table\">\n        <tr class=\"header\">\n            <td width=\"20%\">代码</td>\n            <td width=\"80%\">说明</td>\n        </tr>\n        <tr  v-for=\"(code,text) in items\">\n            <td width=\"10%\">{{code}}</td>\n            <td width=\"90%\">{{text}}</td>\n        </tr>\n    </table>\n</div>\n";

/***/ }

});