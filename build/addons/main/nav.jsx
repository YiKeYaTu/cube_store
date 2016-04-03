import React from 'react';
let Nav = React.createClass({
	render () {
		return (
			<div className='center' style={{
				background: '#383838',
				borderRadius: '6px',
				overflow: 'hidden',
				position: 'relative'
			}}>
				<ul style={{
					overflow: 'hidden'
				}}>
					<NavLister onClick={this.props.onClick['index']} focus={this.props.focus.index == 1 ? '1' : ''} val='主页'/>
					<NavLister onClick={this.props.onClick['detail']} focus={this.props.focus.detail == 1 ? '1' : ''} val='商品列表'/>
					<NavLister focus={this.props.focus.aboutUs == 1 ? '1' : ''} val='关于我们'/>
					<Search/>
				</ul>
			</div>
		);
	}
});

let NavLister = React.createClass({
	render () {
		return (
			<a onClick={this.props.onClick} href=''>
				<li className='nav-list' style={{
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
				    MsTransition: 'all .9s',
				}}>
					{this.props.val}
				</li>
			</a>
		);
	}
});

let Search = React.createClass({
	render () {
		return (
			<li className='nav-list' style={{
				float: 'right',
				width: '250px',
				margin: '15px 20px'
			}}>
				<input placeholder='搜索' style={{
					border: 'none',
					width: '230px',
					borderRadius: '4px',
					height: '20px',
					padding: '5px 10px',
					lineHeight: '20px',
					outline: 'none',
				}} type='text'>
				</input>
				<input style={{
					position: 'absolute',
					padding: '7px 0px',
					width: '16px',
					height: '16px',
					border: 'none',
					top: '22px',
					right: '26px',
					outline: 'none',
					cursor: 'pointer',
					background: `url(${require('../../images/search.png')})`,
				}} type='submit' value=''>
				</input>
			</li>
		);
	}
});
export default Nav;


