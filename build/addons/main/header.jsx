import React from 'react';
let Header = React.createClass({
	render () {
		return (
			<div style={{
				width: '100%',
				background: '#eee'
			}}>
				<div className='header center' style={{
					position: 'relative',
				}}>
					<ul style={{
						float: 'right',
						padding: '20.5px 0',
						height: '18px'
					}}>
						<UserList num='1' val='注册'/>
						<UserList num='2' val='登陆'/>
						<a href="">
							<li className='upload-api' style={{
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
							}}>
								上传API
							</li>
						</a>
					</ul>
				</div>
			</div>
		);
	}
});

let UserList = React.createClass({
	render () {
		return (
			<li style={{
				float: 'left',
				height: '18px',
				cursor: 'pointer',
				lineHeight: '18px',
				color: '#000',
				fontSize: '14px',
				padding: '0px 12px',
				borderRight: this.props.num == 1 ?'1px solid #000' : '',
				marginRight: this.props.num == 2 ? '90px' : '0px',
			}}>{this.props.val}</li>
		);
	}
});



export default Header;

