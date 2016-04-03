import React from 'react';
let Footer = React.createClass({
	render () {
		return (
			<div style={{
				width: '100%',
				marginTop: '20px',
				borderTop: '1px solid #CECECE',
				borderBottom: '1px solid #CECECE',
			}}>
				<div className='center' style={{
					paddingBottom: '20px',
					overflow: 'hidden',
				}}>
					<ul style={{
						overflow: 'hidden'
					}}>
						<FooterLister val='信息' arr={['这是元素', '呵呵呵呵']}/>
						<FooterLister val='关于我们' arr={['这是元素', '我也是元素']}/>
						<FooterLister val='我的账户' arr={['是好事', '我也是元素']}/>
						<FooterLister val='联系我们' arr={['212121', '421214214']} sp='1'/>
					</ul>
				</div>
			</div>
		);
	}
});

let FooterLister = React.createClass({
	render () {
		let jud = this.props.sp == 1 ? [0, 0] : [0];
		let that = this;
		return (
			<li style={{
				width: '25%',
				float: 'left',
				boxSizing: 'border-box',
				borderLeft: '1px solid #CECECE',
				color: '#666'
			}}>
			{
				React.Children.map(jud, function (item, index) {
					return (
						<ul style={{
							paddingBottom: '10px'
						}}>
							<li style={{
								height: '40px',
								lineHeight: '40px',
								borderBottom: '1px solid #CECECE',
								fontWeight: 'bold',
								paddingLeft: '22px',
								marginRight: '80px'
							}}>
								{that.props.val}
							</li>
							{
								React.Children.map(that.props.arr, function (item, index) {
									return (<Inf key={index} val={item}/>)
								})
							}
						</ul>
					)
				})
			}

			</li>
		);
	}
});

let Inf = React.createClass({
	render () {
		return (
			<li style={{
				color: '#9c9c9c',
				fontSize: '12px',
				height: '28px',
				paddingLeft: '22px',
				lineHeight: '28px'
			}}>
				{this.props.val}
			</li>
		);
	}
});

let Contact = React.createClass({
	render () {
		return (
			<li style={{
				color: '#9c9c9c',
				fontSize: '12px',
				height: '28px',
				paddingLeft: '22px',
				lineHeight: '28px'
			}}>
				哈哈
			</li>
		);
	}
});

export default Footer;


