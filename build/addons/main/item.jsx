import React from 'react';
let initArr = [];
let flag = false;


let Item = React.createClass({
	getInitialState() {
	    return {
	        posJud: 0  
	    };
	},
	handleGMouseOver (e) {
		let name = e.target.getAttribute('name');
		this.setState({
			posJud: name
		});
	},
	render () {
		let keys = this.props.keys;
		let src = require('../../images/feature-pic3.jpg');
		return (
			<div ref='container' style={{
				width: '23%',
				height: '300px',
				marginTop: '20px',
				WebkitTransform: 'scale(1)',
				MsTransform: 'scale(1)',
				MozTransform: 'scale(1)', 
				transform: 'scale(1)',
				boxShadow: '0px 0px 3px rgb(150, 150, 150)',
			    WebkitBoxShadow: '0px 0px 3px rgb(150, 150, 150)',
			    MozBoxShadow: '0px 0px 3px rgb(150, 150, 150)',
			    OBoxShadow: '0px 0px 3px rgb(150, 150, 150)',
			    float: 'left',
			    boxSizing: 'border-box',
			    padding: '20px 20px',
			    position: 'relative',
			    marginLeft: keys % 4 === 0 ? '1%' : '',
			    marginRight: keys % 4 === 3 ? '' : '2%',
			}}>
				<G name='1' onMouseOver={this.handleGMouseOver} top='-30' left='0' height='50' width='100%'/>
				<G name='2' onMouseOver={this.handleGMouseOver} top='20' left='90%' height='170' width='25'/>
				<G name='3' onMouseOver={this.handleGMouseOver} top='190' left='0' height='50' width='100%'/>
				<G name='4' onMouseOver={this.handleGMouseOver} top='20' left='-30' height='170' width='25'/>
				<Info posJud={this.state.posJud}/>
				<p style={{
					marginTop: '20px',
					textAlign: 'center',
					paddingBottom: '20px',
					color: '#666',
					fontWeight: 'bold',
					borderBottom: '2px solid #00BFFF'
				}}>
					这个API的名字是啥
				</p>
				<div>
					<p style={{
						width: '50%',
						height: '38px',
						lineHeight: '46px',
						fontWeight: 'bold',
						fontSize: '20px',
						color: '#666',
						float: 'left'
					}}>
						<i style={{
							fontSize: '16px',
							position: 'relative',
							top: '-2px'
						}} className='iconfont'>&#xe6bf;</i>100
					</p>
					<div className='add-shop' style={{
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
					    MsTransition: 'all .9s',
					}}>
						加入购物车
					</div>	
				</div>
			</div>
		);

	}
});

let Info = React.createClass({
	getInitialState() {
    	return {
    		isRuning: false,
    		left: 0,
    		top: '-170px',
    	}
  	},
	posX: null,
	posY: null,
	width: null,
	componentDidMount() {
		initArr.push(this.initPos);
		if (!flag) {
			window.onload = function () {
				initArr.forEach(function (item) {
					item();
				}.bind(this));
			}.bind(this);
			flag = true;
		}
	},
	initPos () {
		let node = this.refs['img-outer'];
		this.width = parseFloat(getComputedStyle(node,null)['width']);
		while (node) {
			this.posX += node.offsetLeft;
			this.posY += node.offsetTop;
			node = node.offsetParent;
		}
	},
	handleMouseEnter (e) {
		let relatedTarget = e.relatedTarget;
		let target = e.currentTarget;
		if (target.contains(relatedTarget)) {
			return;
		}
		this.setState({
			top: 0,
			left: 0,
			isRuning: true,
		});

	},
	handleMouseLeave (e) {
		let relatedTarget = e.relatedTarget;
		let target = e.currentTarget;
		if (target.contains(relatedTarget)) {
			return;
		}
		let pageY = e.pageY, pageX = e.pageX;
		let left = 0, top = 0;
		if (pageY <= this.posY) {
			top = '-170px';
		} else if (pageY >= this.posY + 170) {
			top = '170px';
		} else if (pageX <= this.posX) {
			left = '-100%';
		} else {
			left = '100%';
		}
		this.setState({
			left: left,
			top: top,
		})
	},
	render () {
		let left = this.state.left,
			top = this.state.top;
		// let posJud = this.props.posJud;
		// if (posJud == 1) {
		// 	top = '-170px';
		// } else if (posJud == 2) {
		// 	left = '100%';
		// } else if (posJud == 3) {
		// 	top = '170px';
		// } else if (posJud == 4) {
		// 	left = '-100%';
		// }
		return (
			<section 
				onMouseOver={this.handleMouseEnter} 
				onMouseOut={this.handleMouseLeave}
				ref='img-outer'
				style = {{
					width: '100%',
					height: '170px',
					cursor: 'pointer',
					WebkitTransform: 'scale(1)',
					MsTransform: 'scale(1)',
					MozTransform: 'scale(1)', 
					transform: 'scale(1)', 
					overflow: 'hidden',
					position: 'relative',
				}} 
				className='img-outer'>
				<div style={{
					zIndex: 0,
					width: '100%',
					height: '170px',
					position: 'absolute',
					top: top,
					left: left,
					background: '#00BFFF',
					transition: this.state.isRuning ? 'all 0.5s ease-in-out' : '',
					opacity: '0.8',
				}}>
					<p style={{
						padding: '4px 4px',
						fontSize: '13px',
						lineHeight: '20px',
						color: '#fff'
					}}>
						这里是产品介绍之乐的东西，具体我也不知道，呵呵呵
					</p>
				</div>
				<img onMouseEnter = {this.mouseInHandler} style={{
					width: '100%',
					maxHeight: '170px',
					minHeight: '160px',
				}} src='http://file3.u148.net/2011/4/images/1302139153715.jpg'/>
			</section>
			
		)
	}
})

let G = React.createClass({
	render () {
		let left = this.props.left.match(/\%/) ? this.props.left : this.props.left + 'px';
		return (
			<div name={this.props.name} onMouseOver={this.props.onMouseOver} style={{
				width: this.props.width,
				height: this.props.height + 'px',
				position: 'absolute',
				top: this.props.top + 'px',
				left: left,
				zIndex: 100,
			}}>
			</div>
		)
	}
})
export default Item;