webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _index = __webpack_require__(164);

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
			var src = __webpack_require__(175);
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
						marginRight: keys % 4 === 3 ? '' : '2%',
						overflow: 'hidden'
					} },
				_react2.default.createElement(Info, null),
				_react2.default.createElement(
					'p',
					{ style: {
							marginTop: '20px',
							textAlign: 'center',
							paddingBottom: '20px',
							color: '#666',
							fontWeight: 'bold',
							borderBottom: '2px solid #00BFFF'
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

	var Info = _react2.default.createClass({
		displayName: 'Info',
		getInitialState: function getInitialState() {
			return { opci: '0', isRuning: 0, isIn: 0 };
		},
		mouseInHandler: function mouseInHandler() {
			console.log('进入主区域');
			this.setState({ isRuning: 1, isIn: 1 }, function () {
				this.setState({ left: '0px', top: '0px', opci: '0.6' });
			});
		},
		handleMouseIn: function handleMouseIn(pos) {
			console.log('进入感应区');
			switch (pos) {
				case '-50px':
					this.setState({ left: '0px', top: '-170px', opci: '0' });
					break;
				case '1px':
					this.setState({ left: '-100%', top: '0px', opci: '0' });
					break;
				case '2px':
					this.setState({ left: '100%', top: '0', opci: '0' });
					break;
				case '170px':
					this.setState({ left: '0px', top: '170px', opci: '0' });
					break;
			}
		},
		handleMouseOut: function handleMouseOut() {
			if (this.state.isIn) {
				console.log('离开感应区');
				this.setState({ isIn: 0, isRuning: 0 });
			}
		},
		render: function render() {
			return _react2.default.createElement(
				'section',
				{
					ref: 'img-outer',
					style: {
						width: '100%',
						height: '170px',
						cursor: 'pointer',
						WebkitTransform: 'scale(1)',
						MsTransform: 'scale(1)',
						MozTransform: 'scale(1)',
						transform: 'scale(1)',
						overflow: 'hidden'
					},
					className: 'img-outer' },
				_react2.default.createElement(Sensors, { position: 'top', mousein: this.handleMouseIn, mouseout: this.handleMouseOut }),
				_react2.default.createElement(Sensors, { position: 'left', mousein: this.handleMouseIn, mouseout: this.handleMouseOut }),
				_react2.default.createElement(Sensors, { position: 'buttom', mousein: this.handleMouseIn, mouseout: this.handleMouseOut }),
				_react2.default.createElement(Sensors, { position: 'right', mousein: this.handleMouseIn, mouseout: this.handleMouseOut }),
				_react2.default.createElement(
					'div',
					{ style: {
							zIndex: 0,
							width: '100%',
							height: '170px',
							position: 'absolute',
							top: this.state.top ? this.state.top : '10px',
							left: this.state.left ? this.state.left : '10px',
							background: '#00BFFF',
							transition: this.state.isRuning ? 'all 0.5s ease-in-out' : 'all 0s ease-in-out',
							opacity: this.state.opci ? this.state.opci : '0'
						} },
					_react2.default.createElement(
						'p',
						{ style: {
								padding: '4px 4px',
								fontSize: '13px',
								lineHeight: '20px',
								color: '#fff'
							} },
						'这里是产品介绍之乐的东西，具体我也不知道，呵呵呵'
					)
				),
				_react2.default.createElement('img', { onMouseEnter: this.mouseInHandler, style: {
						width: '100%',
						maxHeight: '170px',
						minHeight: '160px'
					}, src: 'http://file3.u148.net/2011/4/images/1302139153715.jpg' })
			);
		}
	});

	var Sensors = _react2.default.createClass({
		displayName: 'Sensors',
		handleMouseEnter: function handleMouseEnter(e) {
			this.props.mousein(e.target.style.top);
		},
		handleMouseOut: function handleMouseOut() {
			this.props.mouseout();
		},


		propTypes: {
			position: _react2.default.PropTypes.string.isRequired
		},
		render: function render() {
			switch (this.props.position) {
				case 'top':
					return _react2.default.createElement('span', { pos: 'top', onMouseOver: this.handleMouseEnter, onMouseOut: this.handleMouseOut, style: {
							zIndex: 1,
							position: 'absolute',
							top: '-50px',
							display: 'inline-block',
							height: '50px',
							width: '100%'
						} });
					break;
				case 'left':
					return _react2.default.createElement('span', { pos: 'left', onMouseOver: this.handleMouseEnter, onMouseOut: this.handleMouseOut, style: {
							zIndex: 1,
							position: 'absolute',
							top: '1px',
							left: '-50px',
							display: 'inline-block',
							height: '169px',
							width: '50px'
						} });
					break;
				case 'buttom':
					return _react2.default.createElement('span', { pos: 'buttom', onMouseOver: this.handleMouseEnter, onMouseOut: this.handleMouseOut, style: {
							zIndex: 1,
							position: 'absolute',
							top: '170px',
							display: 'inline-block',
							height: '50px',
							width: '100%'
						} });
					break;
				case 'right':
					return _react2.default.createElement('span', { pos: 'right', onMouseOver: this.handleMouseEnter, onMouseOut: this.handleMouseOut, style: {
							zIndex: 1,
							position: 'absolute',
							top: '2px',
							right: '-30px',
							display: 'inline-block',
							height: '168px',
							width: '30px'
						} });
					break;
			}
		}
	});

	exports.default = Item;

/***/ },

/***/ 163:
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

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _hot_item = __webpack_require__(165);

	var _hot_item2 = _interopRequireDefault(_hot_item);

	var _inf = __webpack_require__(163);

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

/***/ 165:
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

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e0419f8c09d845e53dfd42bd0755694a.jpg";

/***/ }

});