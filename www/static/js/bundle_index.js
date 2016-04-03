webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _index = __webpack_require__(165);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_reactDom2.default.render(_react2.default.createElement(_index2.default, null), document.getElementById('indexContainer'));

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Item = _react2.default.createClass({
		displayName: 'Item',
		render: function render() {
			var keys = this.props.keys;
			var src = __webpack_require__(162);
			return _react2.default.createElement(
				'div',
				{ style: {
						width: '23%',
						height: '300px',
						marginTop: '20px',
						boxShadow: '0px 0px 3px rgb(150, 150, 150)',
						WebkitBoxShadow: '0px 0px 3px rgb(150, 150, 150)',
						MozBoxShadow: '0px 0px 3px rgb(150, 150, 150)',
						OBoxShadow: '0px 0px 3px rgb(150, 150, 150)',
						float: 'left',
						boxSizing: 'border-box',
						padding: '20px 20px',
						marginLeft: keys % 4 === 0 ? '1%' : '',
						marginRight: keys % 4 === 3 ? '' : '2%'
					} },
				_react2.default.createElement('img', { style: {
						width: '100%',
						maxHeight: '170px'
					}, src: 'http://172.22.146.3/CubeApiStore/img/carousel_back_2.jpg' }),
				_react2.default.createElement(
					'p',
					{ style: {
							marginTop: '20px',
							textAlign: 'center',
							paddingBottom: '20px',
							color: '#666',
							fontWeight: 'bold',
							borderBottom: '1px solid #00BFFF'
						} },
					'这个API的名字是啥'
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'p',
						{ style: {
								width: '50%',
								height: '38px',
								lineHeight: '46px',
								fontWeight: 'bold',
								fontSize: '20px',
								color: '#666',
								float: 'left'
							} },
						_react2.default.createElement(
							'i',
							{ style: {
									fontSize: '16px',
									position: 'relative',
									top: '-2px'
								}, className: 'iconfont' },
							''
						),
						'100'
					),
					_react2.default.createElement(
						'div',
						{ className: 'add-shop', style: {
								float: 'left',
								width: '50%',
								height: '38px',
								lineHeight: '38px',
								background: '#00BFFF',
								textAlign: 'center',
								color: '#fff',
								fontSize: '14px',
								cursor: 'pointer',
								WebkitTransition: 'all .9s',
								MozTransition: 'all .9s',
								OTransition: 'all .9s',
								MsTransition: 'all .9s'
							} },
						'加入购物车'
					)
				)
			);
		}
	});

	exports.default = Item;

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e0419f8c09d845e53dfd42bd0755694a.jpg";

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Inf = _react2.default.createClass({
		displayName: 'Inf',
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'center' },
				_react2.default.createElement(
					'div',
					{ style: {
							width: '100%',
							padding: '16px 16px',
							border: '1px solid #eee',
							boxSizing: 'border-box',
							overflow: 'hidden'
						} },
					_react2.default.createElement(
						'h3',
						{ style: {
								height: '26px',
								fontSize: '20px',
								float: 'left'
							} },
						_react2.default.createElement(
							'strong',
							{ style: {
									color: '#00BFFF'
								} },
							this.props.val
						),
						'商品'
					),
					_react2.default.createElement(
						'p',
						{ className: 'more', style: {
								float: 'right',
								lineHeight: '26px',
								cursor: 'pointer',
								WebkitTransition: 'all .4s',
								MozTransition: 'all .4s',
								OTransition: 'all .4s',
								MsTransition: 'all .4s',
								display: this.props.sp == 1 ? 'none' : 'block'
							} },
						'查看更多',
						_react2.default.createElement(
							'i',
							{ style: {
									color: '#00BFFF',
									fontSize: '20px',
									WebkitTransition: 'all .4s',
									MozTransition: 'all .4s',
									OTransition: 'all .4s',
									MsTransition: 'all .4s'
								}, className: 'iconfont' },
							''
						)
					)
				)
			);
		}
	});
	exports.default = Inf;

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _hot_item = __webpack_require__(166);

	var _hot_item2 = _interopRequireDefault(_hot_item);

	var _inf = __webpack_require__(164);

	var _inf2 = _interopRequireDefault(_inf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Index = _react2.default.createClass({
		displayName: 'Index',
		render: function render() {
			return _react2.default.createElement(
				'section',
				null,
				_react2.default.createElement(_inf2.default, { val: '最热' }),
				_react2.default.createElement(_hot_item2.default, { val: '最热' }),
				_react2.default.createElement(_inf2.default, { val: '最新' }),
				_react2.default.createElement(_hot_item2.default, { val: '最新' })
			);
		}
	});

	exports.default = Index;

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _item = __webpack_require__(161);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HotItem = _react2.default.createClass({
		displayName: 'HotItem',
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'center', style: {} },
				_react2.default.createElement(
					'div',
					{ style: {
							paddingBottom: '40px',
							overflow: 'hidden'
						} },
					[0, 0, 0, 0].map(function (item, index) {
						return _react2.default.createElement(_item2.default, { key: index, keys: index });
					})
				)
			);
		}
	});

	exports.default = HotItem;

/***/ }

});