import React from 'react';
let Inf = React.createClass({
	render () {
		return (
			<div className='center'>
				<div style={{
					width: '100%',
					padding: '16px 16px',
					border: '1px solid #eee',
					boxSizing: 'border-box',
					overflow: 'hidden',
				}}>
					<h3 style={{
						height: '26px',
						fontSize: '20px',
						float: 'left'
					}}>
						<strong style={{
							color: '#00BFFF',
						}}>{this.props.val}</strong>商品
					</h3>
					<p className='more' style={{
						float: 'right',
						lineHeight: '26px',
						cursor: 'pointer',
						WebkitTransition: 'all .4s',
					    MozTransition: 'all .4s',
					    OTransition: 'all .4s',
					    MsTransition: 'all .4s',
					    display: this.props.sp == 1 ? 'none' : 'block',
					}}>
						查看更多
						<i style={{
							color: '#00BFFF',
							fontSize: '20px',
							WebkitTransition: 'all .4s',
						    MozTransition: 'all .4s',
						    OTransition: 'all .4s',
						    MsTransition: 'all .4s',
						}} className='iconfont'>&#xe629;</i>
					</p>
				</div>
			</div>
		);
	}
});
export default Inf;