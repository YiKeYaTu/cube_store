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
			    transform: ;
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
    	return {opci: '0'};
  	},
	handleMouseOver(e) {
		let target = this.refs['img-outer'];
		console.log(e.clientY);
		this.setState({opci: '0.8'});
  	},
  	handleMouseOut() {
  		this.setState({opci: '0'});
  	},
	render () {
		return (
			<section 
				ref='img-outer'
				onMouseOver={this.handleMouseOver} 
				onMouseOut={this.handleMouseOut} 
				style={{
					width: '100%',
					height: '170px',
					cursor: 'pointer',
					WebkitTransform: 'scale(1)',
					MsTransform: 'scale(1)',
					MozTransform: 'scale(1)', 
					transform: 'scale(1)', 
				}} 
				className='img-outer'>
				<div style={{
					width: '100%',
					height: '170px',
					position: 'absolute',
					background: '#00BFFF',
					transition: 'opacity 0.5s ease-in-out',
					opacity: this.state.opci,
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
				<img style={{
					width: '100%',
					maxHeight: '170px',
					minHeight: '160px',
				}} src='http://file3.u148.net/2011/4/images/1302139153715.jpg'/>
			</section>
			
		)
	}
})

export default Item;