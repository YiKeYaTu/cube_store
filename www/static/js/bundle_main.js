webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _container = __webpack_require__(166);

	var _container2 = _interopRequireDefault(_container);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	_reactDom2.default.render(_react2.default.createElement(_container2.default, null), document.getElementById('container'));

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _header = __webpack_require__(167);

	var _header2 = _interopRequireDefault(_header);

	var _logo = __webpack_require__(168);

	var _logo2 = _interopRequireDefault(_logo);

	var _nav = __webpack_require__(169);

	var _nav2 = _interopRequireDefault(_nav);

	var _item_list = __webpack_require__(171);

	var _item_list2 = _interopRequireDefault(_item_list);

	var _footer = __webpack_require__(173);

	var _footer2 = _interopRequireDefault(_footer);

	var _white_wapper = __webpack_require__(174);

	var _white_wapper2 = _interopRequireDefault(_white_wapper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Container = _react2.default.createClass({
		displayName: 'Container',
		getInitialState: function getInitialState() {
			return {
				display: {
					index: 0,
					detail: 0
				},
				wapperDisplay: 0,
				wapperHeight: window.innerHeight,
				opacity: 0
			};
		},
		componentDidMount: function componentDidMount() {
			this.initLoad();
			window.onpopstate = function (e) {
				this.initLoad();
			}.bind(this);
			window.onresize = function (e) {
				this.setState({
					wapperHeight: window.innerHeight
				});
			}.bind(this);
		},
		initLoad: function initLoad() {
			this.load.loadScript(this);
		},
		scroll: function scroll(pos) {
			var top = pos !== undefined ? pos : this.refs.realContainer.offsetTop;
			var oTop = document.body.scrollTop;
			var allTimer = 200;
			var timeScal = 1000 / 60;
			var v = (top - oTop) / (allTimer / timeScal);
			var dis = oTop;
			var timer = setInterval(function () {
				window.scrollTo(0, dis);
				dis += v;
				if (oTop >= top && dis <= top || oTop <= top && dis >= top) {
					clearInterval(timer);
				}
			}, timeScal);
		},
		changeState: function changeState(display, opacity) {
			if (opacity === 1) {
				this.setState({
					wapperDisplay: opacity
				});
			} else {
				setTimeout(function () {
					this.setState({
						wapperDisplay: opacity
					});
				}.bind(this), 400);
			}

			this.setState({
				display: display,
				opacity: opacity
			});

			opacity === 1 && setTimeout(function () {
				opacity = 0;
				this.changeState(display, opacity);
			}.bind(this), 400);
		},

		load: {
			pathname: '/static/js/',
			prefix: 'bundle_',
			body: document.body,
			route: {
				index: {
					exp: /\/index\/?$/,
					pathname: '../index/'
				},
				detail: {
					exp: /\/detail\/?$/,
					pathname: '../detail/'
				}
			},
			routeScript: {},
			loadScript: function loadScript(self) {
				var _this = this;

				var location = window.location.href.match(/\/([^\/]+?)\/?$/)[1];
				var display = self.state.display;
				var opacity = self.state.opacity;
				opacity = 1;
				for (var key in display) {
					if (display[key] === 1) {
						display[key] = 0;
					}
				}
				display[location] = 1;
				if (!this.routeScript[location]) {
					(function () {
						_this.routeScript[location] = {
							load: true
						};
						var script = document.createElement('script');
						script.src = _this.pathname + _this.prefix + location + '.js';
						_this.body.appendChild(script);
						script.onload = function () {
							self.changeState(display, opacity);
							this.body.removeChild(script);
						}.bind(_this);
					})();
				} else {
					self.changeState(display, opacity);
				}
			}
		},
		handleClickChangeHref: function handleClickChangeHref(inf) {
			var _arguments = arguments,
			    _this2 = this;

			if (arguments.length > 1) {
				var _ret2 = function () {
					var arg = _arguments;
					var obj = {};

					var _loop = function _loop(i, len) {
						obj[arg[i]] = function (e) {
							var location = window.location.href;
							var route = this.load.route[arg[i]];
							e.preventDefault();
							if (!location.match(route.exp)) {
								history.pushState('', '', route.pathname);
								this.initLoad();
								if (route.pathname === '../detail/') {
									this.scroll();
								}
							}
						}.bind(_this2);
					};

					for (var i = 0, len = arg.length; i < len; i++) {
						_loop(i, len);
					}
					return {
						v: obj
					};
				}();

				if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
			}
			return function (e) {
				var location = window.location.href;
				var route = this.load.route[inf];
				e.preventDefault();
				if (!location.match(route.exp)) {
					history.pushState('', '', route.pathname);
					this.initLoad();
					if (route.pathname === '../detail/') {
						this.scroll();
					}
				}
			}.bind(this);
		},
		render: function render() {
			return _react2.default.createElement(
				'section',
				null,
				_react2.default.createElement(_header2.default, null),
				_react2.default.createElement(_logo2.default, null),
				_react2.default.createElement(_nav2.default, {
					onClick: this.handleClickChangeHref('index', 'detail'),
					focus: this.state.display
				}),
				_react2.default.createElement(_item_list2.default, {
					onClick: this.handleClickChangeHref('detail')
				}),
				_react2.default.createElement(_white_wapper2.default, {
					wapperDisplay: this.state.wapperDisplay,
					wapperHeight: this.state.wapperHeight,
					opacity: this.state.opacity
				}),
				_react2.default.createElement(
					'section',
					{
						ref: 'realContainer',
						style: {
							position: 'relative',
							overflow: 'hidden'
						},
						id: 'pageContainer' },
					_react2.default.createElement('section', {
						ref: 'indexContainer',
						style: {
							display: this.state.display.index == 1 ? 'block' : 'none'
						},
						id: 'indexContainer' }),
					_react2.default.createElement('section', {
						ref: 'detailContainer',
						style: {
							display: this.state.display.detail == 1 ? 'block' : 'none'
						},
						id: 'detailContainer' })
				),
				_react2.default.createElement(_footer2.default, null)
			);
		}
	});

	exports.default = Container;

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Header = _react2.default.createClass({
		displayName: 'Header',
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ style: {
						width: '100%',
						background: '#eee'
					} },
				_react2.default.createElement(
					'div',
					{ className: 'header center', style: {
							position: 'relative'
						} },
					_react2.default.createElement(
						'ul',
						{ style: {
								float: 'right',
								padding: '20.5px 0',
								height: '18px'
							} },
						_react2.default.createElement(UserList, { num: '1', val: '注册' }),
						_react2.default.createElement(UserList, { num: '2', val: '登陆' }),
						_react2.default.createElement(
							'a',
							{ href: '' },
							_react2.default.createElement(
								'li',
								{ className: 'upload-api', style: {
										float: 'left',
										height: '64px',
										lineHeight: '59px',
										position: 'absolute',
										background: '#00BFFF',
										color: '#fff',
										top: '0px',
										right: '0px',
										WebkitTransition: 'all .9s',
										MozTransition: 'all .9s',
										OTransition: 'all .9s',
										MsTransition: 'all .9s',
										padding: '0 10px',
										borderBottomLeftRadius: '6px',
										borderBottomRightRadius: '6px'
									} },
								'上传API'
							)
						)
					)
				)
			);
		}
	});

	var UserList = _react2.default.createClass({
		displayName: 'UserList',
		render: function render() {
			return _react2.default.createElement(
				'li',
				{ style: {
						float: 'left',
						height: '18px',
						lineHeight: '18px',
						color: '#000',
						fontSize: '14px',
						padding: '0px 12px',
						borderRight: this.props.num == 1 ? '1px solid #000' : '',
						marginRight: this.props.num == 2 ? '90px' : '0px'
					} },
				this.props.val
			);
		}
	});

	exports.default = Header;

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LogoContainer = _react2.default.createClass({
		displayName: 'LogoContainer',
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'center', style: {
						overflow: 'hidden',
						padding: '40px 0px'
					} },
				_react2.default.createElement(
					'h1',
					{ style: {
							fontSize: '40px',
							float: 'left'
						} },
					_react2.default.createElement(
						'strong',
						{ style: {
								color: '#00BFFF'
							} },
						' CUBE '
					),
					'STORE'
				)
			);
		}
	});

	exports.default = LogoContainer;

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Nav = _react2.default.createClass({
		displayName: 'Nav',
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'center', style: {
						background: '#383838',
						borderRadius: '6px',
						overflow: 'hidden',
						position: 'relative'
					} },
				_react2.default.createElement(
					'ul',
					{ style: {
							overflow: 'hidden'
						} },
					_react2.default.createElement(NavLister, { onClick: this.props.onClick['index'], focus: this.props.focus.index == 1 ? '1' : '', val: '主页' }),
					_react2.default.createElement(NavLister, { onClick: this.props.onClick['detail'], focus: this.props.focus.detail == 1 ? '1' : '', val: '商品列表' }),
					_react2.default.createElement(NavLister, { focus: this.props.focus.aboutUs == 1 ? '1' : '', val: '关于我们' }),
					_react2.default.createElement(Search, null)
				)
			);
		}
	});

	var NavLister = _react2.default.createClass({
		displayName: 'NavLister',
		render: function render() {
			return _react2.default.createElement(
				'a',
				{ onClick: this.props.onClick, href: '' },
				_react2.default.createElement(
					'li',
					{ className: 'nav-list', style: {
							float: 'left',
							color: '#fff',
							height: '60px',
							lineHeight: '60px',
							width: '90px',
							background: this.props.focus == 1 ? '#00BFFF' : '',
							textAlign: 'center',
							WebkitTransition: 'all .9s',
							MozTransition: 'all .9s',
							OTransition: 'all .9s',
							MsTransition: 'all .9s'
						} },
					this.props.val
				)
			);
		}
	});

	var Search = _react2.default.createClass({
		displayName: 'Search',
		render: function render() {
			return _react2.default.createElement(
				'li',
				{ className: 'nav-list', style: {
						float: 'right',
						width: '250px',
						margin: '15px 20px'
					} },
				_react2.default.createElement('input', { placeholder: '搜索', style: {
						border: 'none',
						width: '230px',
						borderRadius: '4px',
						height: '20px',
						padding: '5px 10px',
						lineHeight: '20px',
						outline: 'none'
					}, type: 'text' }),
				_react2.default.createElement('input', { style: {
						position: 'absolute',
						padding: '7px 0px',
						width: '16px',
						height: '16px',
						border: 'none',
						top: '22px',
						right: '26px',
						outline: 'none',
						cursor: 'pointer',
						background: 'url(' + __webpack_require__(170) + ')'
					}, type: 'submit', value: '' })
			);
		}
	});
	exports.default = Nav;

/***/ },

/***/ 170:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAEgAAABIAEbJaz4AAAAJdnBBZwAAABAAAAAQAFzGrcMAAADcSURBVCjPhdG9TgJhEIXh58M1EGEFjEohiUGk4f4vBaSy0UYRBFEIP8JaLEvWhOjbTc6bzMlMSPxNRICGpopgZejJJosTIRGCtjtLE1uxmrGeZSZEaGh5NzBH5Na9jp7ksMKNtQcL8O1R2bXYLBUKqBjv45QXJ86yoYBg96v4zr55JqzECjmhamedF4ZqWoe4runTJHcHzy60lb3aqmo6tVHJSoZEoKTjSoSdL5GShZ5ZdqhUPVcWrEzVdRXN9X3khTyXuooW+sm04BgjAyux+7TkMd4kWkaE/979AxXnQ1s0DN1UAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDEwLTAyLTExVDExOjUwOjA4LTA2OjAw1hBl+wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAwNi0wNS0wNVQxMzoyMjo0MC0wNTowML/k/hoAAAAASUVORK5CYII="

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ItemList = _react2.default.createClass({
		displayName: 'ItemList',
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'center', style: {
						paddingTop: '10px',
						overflow: 'hidden',
						marginBottom: '20px'
					} },
				_react2.default.createElement(List, { onClick: this.props.onClick }),
				_react2.default.createElement(Slider, null)
			);
		}
	});

	var List = _react2.default.createClass({
		displayName: 'List',
		render: function render() {
			return _react2.default.createElement(
				'ul',
				{ style: {
						width: '30%',
						color: '#fff',
						float: 'left',
						height: '440px',
						boxSizing: 'border-box',
						border: '1px solid #eee'
					} },
				_react2.default.createElement(
					'li',
					{ style: {
							width: '100%',
							height: '50px',
							paddingLeft: '20px',
							background: '#00BFFF',
							lineHeight: '50px',
							fontSize: '20px',
							boxSizing: 'border-box'
						} },
					'商品列表'
				),
				_react2.default.createElement(Lister, { onClick: this.props.onClick, val: '数据清洗' })
			);
		}
	});

	var Lister = _react2.default.createClass({
		displayName: 'Lister',
		render: function render() {
			return _react2.default.createElement(
				'li',
				{ style: {
						width: '100%',
						height: '34px',
						lineHeight: '34px',
						padding: '0px 20px',
						fontSize: '14px',
						background: 'url(' + __webpack_require__(172) + ') no-repeat 20px center',
						boxSizing: 'border-box'
					} },
				_react2.default.createElement(
					'a',
					{ onClick: this.props.onClick, href: '' },
					_react2.default.createElement(
						'p',
						{ className: 'item-lister', style: {
								paddingLeft: '16px',
								color: '#9c9c9c',
								fontWeight: 'bold',
								borderBottom: '1px solid #eee'
							} },
						this.props.val
					)
				)
			);
		}
	});

	var Slider = _react2.default.createClass({
		displayName: 'Slider',
		render: function render() {
			var sliderArr = [{
				url: ''
			}, {
				url: ''
			}];
			return _react2.default.createElement(
				'ul',
				{ style: {
						width: '69%',
						float: 'left',
						height: '440px',
						background: '#00BFFF',
						marginLeft: '1%',
						position: 'relative'
					} },
				sliderArr.map(function (item, index) {
					return _react2.default.createElement(SliderItem, { key: index, pos: index, url: item.url });
				})
			);
		}
	});

	var SliderItem = _react2.default.createClass({
		displayName: 'SliderItem',
		render: function render() {
			return _react2.default.createElement('li', { style: {
					width: '200%',
					height: '100%',
					position: 'absolute',
					left: this.props.pos * 100 + '%',
					// background: 'url(http://172.22.146.3/CubeApiStore/img/carousel_back_2.jpg) no-repeat',
					backgroundSize: '100% 100%'
				} });
		}
	});
	exports.default = ItemList;

/***/ },

/***/ 172:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACZSURBVHjaYvr//z8DMRgggJgYiAQAAcSCzKmvrxcEUpOBuAeIL4DEGhsbwXIAAYRu4nsgXgnEU4DYCVkCIIBYsNiyGYiFgHgjEGsC8ROQIEAAYXOjLxCnArE/0BNPYIIAAYRiIlBCkJGRMRxI5/z+/fsCGxsbXA4ggNCt/vj9+/d4Tk7Ov6qqqgzaWlpwCYAAYgSFETEAIMAAl/9Aq9GmXU4AAAAASUVORK5CYII="

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Footer = _react2.default.createClass({
		displayName: 'Footer',
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ style: {
						width: '100%',
						marginTop: '20px',
						borderTop: '1px solid #CECECE',
						borderBottom: '1px solid #CECECE'
					} },
				_react2.default.createElement(
					'div',
					{ className: 'center', style: {
							paddingBottom: '20px',
							overflow: 'hidden'
						} },
					_react2.default.createElement(
						'ul',
						{ style: {
								overflow: 'hidden'
							} },
						_react2.default.createElement(FooterLister, { val: '信息', arr: ['这是元素', '呵呵呵呵'] }),
						_react2.default.createElement(FooterLister, { val: '关于我们', arr: ['这是元素', '我也是元素'] }),
						_react2.default.createElement(FooterLister, { val: '我的账户', arr: ['是好事', '我也是元素'] }),
						_react2.default.createElement(FooterLister, { val: '联系我们', arr: ['212121', '421214214'], sp: '1' })
					)
				)
			);
		}
	});

	var FooterLister = _react2.default.createClass({
		displayName: 'FooterLister',
		render: function render() {
			var jud = this.props.sp == 1 ? [0, 0] : [0];
			var that = this;
			return _react2.default.createElement(
				'li',
				{ style: {
						width: '25%',
						float: 'left',
						boxSizing: 'border-box',
						borderLeft: '1px solid #CECECE',
						color: '#666'
					} },
				_react2.default.Children.map(jud, function (item, index) {
					return _react2.default.createElement(
						'ul',
						{ style: {
								paddingBottom: '10px'
							} },
						_react2.default.createElement(
							'li',
							{ style: {
									height: '40px',
									lineHeight: '40px',
									borderBottom: '1px solid #CECECE',
									fontWeight: 'bold',
									paddingLeft: '22px',
									marginRight: '80px'
								} },
							that.props.val
						),
						_react2.default.Children.map(that.props.arr, function (item, index) {
							return _react2.default.createElement(Inf, { key: index, val: item });
						})
					);
				})
			);
		}
	});

	var Inf = _react2.default.createClass({
		displayName: 'Inf',
		render: function render() {
			return _react2.default.createElement(
				'li',
				{ style: {
						color: '#9c9c9c',
						fontSize: '12px',
						height: '28px',
						paddingLeft: '22px',
						lineHeight: '28px'
					} },
				this.props.val
			);
		}
	});

	var Contact = _react2.default.createClass({
		displayName: 'Contact',
		render: function render() {
			return _react2.default.createElement(
				'li',
				{ style: {
						color: '#9c9c9c',
						fontSize: '12px',
						height: '28px',
						paddingLeft: '22px',
						lineHeight: '28px'
					} },
				'哈哈'
			);
		}
	});

	exports.default = Footer;

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
					value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var WhiteWapper = _react2.default.createClass({
					displayName: 'WhiteWapper',
					render: function render() {
									return _react2.default.createElement('section', { style: {
																	width: '100%',
																	height: this.props.wapperHeight + 'px',
																	background: '#fff',
																	zIndex: this.props.wapperDisplay ? '1' : '-1',
																	opacity: this.props.opacity,
																	position: 'fixed',
																	top: '0px',
																	WebkitTransition: 'opacity .9s',
																	MozTransition: 'opacity .9s',
																	OTransition: 'opacity .9s',
																	MsTransition: 'opacity .9s'
													}, ref: 'white-wapper' });
					}
	});

	exports.default = WhiteWapper;

/***/ }

});