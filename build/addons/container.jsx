import React from 'react';
import Header from './main/header.jsx';
import Logo from './main/logo.jsx';
import Nav from './main/nav.jsx';
import ItemList from './index/item_list.jsx';
import Footer from './main/footer.jsx';
import WhiteWapper from './main/white_wapper.jsx';
let Container = React.createClass({
	getInitialState() {
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
	componentDidMount() {
		this.initLoad();
	    window.onpopstate = function (e) {
	    	this.initLoad();
	    }.bind(this);
	    window.onresize = function (e) {
	    	this.setState({
	    		wapperHeight: window.innerHeight
	    	})
	    }.bind(this);
	},
	initLoad () {
		this.load.loadScript(this);
	},
	scroll (pos) {
		let top = (pos !== undefined) ? pos : this.refs.realContainer.offsetTop;
		let oTop = document.body.scrollTop;
		let allTimer = 200;
		let timeScal = 1000 / 60;
		let v = (top - oTop) / (allTimer / timeScal);
		let dis = oTop;
		let timer = setInterval(function () {
			window.scrollTo(0, dis);
			dis += v;
			if ((oTop >= top && dis <= top) || (oTop <= top && dis >= top)) {
				clearInterval(timer);
			}
		}, timeScal);
	},
	changeState (display, opacity) {
		if (opacity === 1) {
			this.setState({
				wapperDisplay: opacity,
			})
		} else {
			setTimeout(function () {
				this.setState({
					wapperDisplay: opacity
				})
			}.bind(this), 400);
		}

		this.setState({
			display: display,
			opacity: opacity,
		});
		
		opacity === 1 && setTimeout(function () {
			opacity = 0;
			this.changeState(display, opacity);
		}.bind(this), 400);
	},
	load : {
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
			},
		},
		routeScript: {},
		loadScript (self) {
			let location = window.location.href.match(/\/([^\/]+?)\/?$/)[1];
			let display = self.state.display;
			let opacity = self.state.opacity;
			opacity = 1;
			for (let key in display) {
				if (display[key] === 1) {
					display[key] = 0;
				}
			}
			display[location] = 1;
			if (!this.routeScript[location]) {		
				this.routeScript[location] = {
					load: true,
				}
				let script = document.createElement('script');
				script.src = this.pathname + this.prefix + location + '.js';
				this.body.appendChild(script);
				script.onload = function () {
					self.changeState(display, opacity);	
					this.body.removeChild(script);
				}.bind(this);
			} else {
				self.changeState(display, opacity);
			}
			
		} 
	},
	handleClickChangeHref (inf) {
		if (arguments.length > 1) {
			let arg = arguments;
			let obj = {};
			for (let i = 0, len = arg.length; i < len; i++) {
				obj[arg[i]] = function (e) {
					let location = window.location.href;
					let route = this.load.route[arg[i]];
					e.preventDefault();
					if (!location.match(route.exp)) {
						history.pushState('', '', route.pathname);
						this.initLoad();
						if (route.pathname === '../detail/') {
							this.scroll();
						}
					}
				}.bind(this);
			}
			return obj;
		}
		return function (e) {
			let location = window.location.href;
			let route = this.load.route[inf];
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
	render () {
		return (
			<section>
				<Header/>
				<Logo/>
				<Nav 
					onClick={this.handleClickChangeHref('index', 'detail')} 
					focus={this.state.display}
				/>
				<ItemList 
					onClick={this.handleClickChangeHref('detail')}
				/>
				<WhiteWapper
					wapperDisplay={this.state.wapperDisplay}
					wapperHeight={this.state.wapperHeight}
					opacity={this.state.opacity}
				/>
				<section 
					ref='realContainer' 
					style={{
						position: 'relative',
						overflow: 'hidden'
					}} 
					id='pageContainer'>
						<section 
							ref='indexContainer' 
							style={{
								display: this.state.display.index == 1 ? 'block' : 'none'
							}} 
							id='indexContainer'>
						</section>
						<section 
							ref='detailContainer' 
							style={{
								display: this.state.display.detail == 1 ? 'block' : 'none'
							}} 
							id='detailContainer'>
						</section>
				</section>
				<Footer/>
			</section>
		);
	}
});

export default Container;



