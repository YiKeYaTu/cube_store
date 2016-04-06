import React from 'react';
let Item = React.createClass({
	render () {
		let keys = this.props.keys;
		let src = require('../../images/feature-pic3.jpg');
		return (
			<div style={{
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
			    overflow: 'hidden',
			}}>
				<Info/>
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
    	return {opci: '0', isRuning: 0, isIn: 0};
  	},

  	mouseInHandler(){
  		console.log('进入主区域')
  		this.setState({isRuning: 1, isIn: 1}, function(){
  			this.setState({left: '0px', top: '0px', opci: '0.6'});
  		});
  	},
  	handleMouseIn(pos) {
  		console.log('进入感应区');
  		switch(pos){
		case '-50px':
			this.setState({left: '0px', top: '-170px', opci: '0'});
			break;
		case '1px':
			this.setState({left: '-100%', top: '0px', opci: '0'});
			break;
		case '2px':
			this.setState({left: '100%', top: '0', opci: '0'});
			break;
		case '170px':
			this.setState({left: '0px', top: '170px', opci: '0'});
			break;
		}
		
  	},
  	handleMouseOut(){
  		if(this.state.isIn){
  			console.log('离开感应区');
  			this.setState({isIn: 0, isRuning: 0});
  		}
  	},
	render () {
		return (
			<section 
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
				}} 
				className='img-outer'>
				<Sensors position="top" mousein={this.handleMouseIn} mouseout={this.handleMouseOut}/>
				<Sensors position="left" mousein={this.handleMouseIn} mouseout={this.handleMouseOut}/>
				<Sensors position="buttom" mousein={this.handleMouseIn} mouseout={this.handleMouseOut}/>
				<Sensors position="right" mousein={this.handleMouseIn} mouseout={this.handleMouseOut}/>
				<div style={{
					zIndex: 0,
					width: '100%',
					height: '170px',
					position: 'absolute',
					top: this.state.top ? this.state.top: '10px',
					left: this.state.left ? this.state.left : '10px',
					background: '#00BFFF',
					transition: this.state.isRuning ? 'all 0.5s ease-in-out' : 'all 0s ease-in-out',
					opacity: this.state.opci ? this.state.opci : '0',
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

let Sensors = React.createClass({
	handleMouseEnter(e) {
		this.props.mousein(e.target.style.top);
  	},
  	handleMouseOut(){
  		this.props.mouseout();
  	},

	propTypes: {
    	position: React.PropTypes.string.isRequired,
  	},
	render () {
		switch(this.props.position){
		case 'top':
		  return (
		  	<span pos='top' onMouseOver={this.handleMouseEnter} onMouseOut={this.handleMouseOut} style={{
		  		zIndex: 1,
		  		position: 'absolute',
		  		top: '-50px',
		  		display: 'inline-block',
		  		height: '50px',
		  		width: '100%',
		  	}}></span>
		  )
		  break;
		case 'left':
		  return (
		  	<span pos = 'left' onMouseOver = {this.handleMouseEnter} onMouseOut={this.handleMouseOut} style={{
		  		zIndex: 1,
		  		position: 'absolute',
		  		top: '1px',
		  		left: '-50px',
		  		display: 'inline-block',
		  		height: '169px',
		  		width: '50px',
		  	}}></span>
		  )
		  break;
		case 'buttom':
		  return (
		  		<span pos = 'buttom' onMouseOver = {this.handleMouseEnter} onMouseOut={this.handleMouseOut} style={{
		  		zIndex: 1,
		  		position: 'absolute',
		  		top: '170px',
		  		display: 'inline-block',
		  		height: '50px',
		  		width: '100%',
		  	}}></span>
		  )
		  break;
		case 'right':
		  return (
		  		<span pos = 'right' onMouseOver = {this.handleMouseEnter} onMouseOut={this.handleMouseOut} style={{
		  		zIndex: 1,
		  		position: 'absolute',
		  		top: '2px',
		  		right: '-30px',
		  		display: 'inline-block',
		  		height: '168px',
		  		width: '30px',
		  	}}></span>
		  )
		  break;
		}
	}
})

export default Item;