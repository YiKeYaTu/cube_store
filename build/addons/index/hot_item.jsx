import React from 'react';
import Item from '../main/item.jsx';
let HotItem = React.createClass({
	render () {
		return (
			<div className='center' style={{
			}}>
				<div style={{
					paddingBottom: '40px',
					overflow: 'hidden'
				}}>

					{
						[0, 0 ,0 ,0].map(function (item, index) {
							return (<Item key={index} keys={index}/>);
						})
					}
				</div>
			</div>
		);
	}
});


export default HotItem;


