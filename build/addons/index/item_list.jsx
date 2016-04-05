import React from 'react';
let ItemList = React.createClass({
	render () {
		return (
			<div className='center' style={{
				paddingTop: '10px',
				overflow: 'hidden',
				marginBottom: '20px'
			}}>
				<List onClick={this.props.onClick}/>
				<Slider/>
			</div>
		);
	}
});

let List = React.createClass({
	render () {
		return (
			<ul style={{
				width: '30%',
				color: '#fff',
				float: 'left',
				height: '440px',
				boxSizing: 'border-box',
				border: '1px solid #eee'
			}}>
				<li style={{
					width: '100%',
					height: '50px',
					paddingLeft: '20px',
					background: '#00BFFF',
					lineHeight: '50px',
					fontSize: '20px',
					boxSizing: 'border-box'
				}}>
					商品列表
				</li>
				<Lister onClick={this.props.onClick} val='数据清洗'/>
			</ul>
		);
	}
});

let Lister = React.createClass({
	render () {
		return (
				<li style={{
					width: '100%',
					height: '34px',
					lineHeight: '34px',
					padding: '0px 20px',
					fontSize: '14px',
					background: `url(${require('../../images/drop_arrow.png')}) no-repeat 20px center`,
					boxSizing: 'border-box'
				}}>
					<a onClick={this.props.onClick} href=''>
						<p className='item-lister' style={{
							paddingLeft: '16px',
							color: '#9c9c9c',
							fontWeight: 'bold',
							borderBottom: '1px solid #eee',
						}}>
							{this.props.val}
						</p>
					</a>
				</li>
		);
	}
});

let Slider = React.createClass({
	timer: null,
	speed: 4000,
	sliderArr: [{
		url: '',
		bg: '#00BFFF'
	},{
		url: '',
		bg: 'green'
	},{
		url: '',
		bg: 'yellow'
	},{
		url: '',
		bg: 'blue'
	}],
	getInitialState() {
	    return {
	        count: 0  
	    };
	},
	componentDidMount() {
		this.startAnimation();
		window.onblur = function () {
			this.stopAnimation();
		}.bind(this);
		window.onfocus = function () {
			this.startAnimation();
		}.bind(this);
	},
	startAnimation () {
		let count = (arguments[0] === undefined) ? this.state.count : arguments[0];
		this.timer = setInterval(function () {
			if (count === this.sliderArr.length - 1) {
				count = -1;
			}
			this.setState({
				count: ++count
			});
			
		}.bind(this), this.speed);
	},
	stopAnimation () {
		clearInterval(this.timer);
	},
	handleBottomClick (count) {
		return function () {
			this.setState({
				count: count
			});
			this.stopAnimation();
			this.startAnimation(count);
		}.bind(this);
	},
	render () {
		return (
			<ul style={{
				width: '69%',
				float: 'left',
				height: '440px',
				marginLeft: '1%',
				position: 'relative',
				WebkitTransform: 'scale(1)',
				MsTransform: 'scale(1)',
				MozTransform: 'scale(1)', 
				transform: 'scale(1)',
				overflow: 'hidden', 
			}}>
				{
					this.sliderArr.map(function (item, index) {
						return (
							<SliderItem 
								bg={item.bg} 
								index={index} 
								count={this.state.count}
								key={index} 
								url={item.url}
							/>
						)
					}.bind(this))
				}
				<SliderBottom 
					onClick={this.handleBottomClick} 
					count={this.state.count}
					arr={this.sliderArr}
				/>
			</ul>
		);
	}
});

let SliderItem = React.createClass({
	render () {
		let left,
			top,
			scal;
		if (this.props.index === this.props.count) {
			left = 0;
			top = 0;
			scal = 1;
		} else if (this.props.index < this.props.count) {
			scal = 0;	
			left = '-100%';
		} else {
			scal = 0;	
			left = '100%';
		}
		return (
			<li style={{
				width: '100%',
				height: '100%',
				left: left,
				top: top,
				position: 'absolute',
				backgroundSize: '100% 100%',
				WebkitTransition: 'all .9s',
			    MozTransition: 'all .9s',
			    OTransition: 'all .9s',
			    MsTransition: 'all .9s',
				WebkitTransform: `scale(${scal})`,
				MsTransform: `scale(${scal})`,
				MozTransform: `scale(${scal})`, 
				transform: `scale(${scal})`,
				overflow: 'hidden', 
			    background: this.props.bg
			}}>
			</li>
		);
	}
});

let SliderBottom = React.createClass({
	render () {
		return (
			<ul style={{
				width: '100%',
				height: '30px',
				background: 'rgba(56, 56, 56, 0.5)',
				marginTop: '410px',
				position: 'relative',
				zIndex: '1',
			}}>
				<div style={{
					float: 'right',
					marginRight: '10px',
				}}>
				{
					this.props.arr.map(function (item, index) {
						return (
							<li onClick={this.props.onClick(index)} style={{
								width: '14px',
								height: '14px',
								background: this.props.count == index ? '#00BFFF' : '#fff',
								borderRadius: '100%',
								float: 'left',
								cursor: 'pointer',
								margin: '8px 4px 0 0',
							}} key={index}>
							</li>
						)
					}.bind(this))
				}
				</div>
			</ul>
		);
	}
});
export default ItemList;


