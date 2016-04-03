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
	render () {
		let sliderArr = [{
			url: ''
		},{
			url: ''
		}];
		return (
			<ul style={{
				width: '69%',
				float: 'left',
				height: '440px',
				background: '#00BFFF',
				marginLeft: '1%',
				position: 'relative'
			}}>
			{
				sliderArr.map(function (item, index) {
					return (<SliderItem key={index} pos={index} url={item.url}/>)
				})
			}
			</ul>
		);
	}
});

let SliderItem = React.createClass({
	render () {
		return (
			<li style={{
					width: '200%',
					height: '100%',
					position: 'absolute',
					left: this.props.pos * 100 + '%',
					// background: 'url(http://172.22.146.3/CubeApiStore/img/carousel_back_2.jpg) no-repeat',
					backgroundSize: '100% 100%'
				}}>
			</li>
		);
	}
});
export default ItemList;


