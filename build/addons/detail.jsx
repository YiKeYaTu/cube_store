import React from 'react';
import AllItem from './detail/all_item.jsx';
import Page from './main/page.jsx';
import Inf from './index/inf.jsx';
let Detail = React.createClass({
	a: 211,
	handleClick () {
		console.log(this.a);
	},
	render () {
		return (
			<section>
	            <Inf onClick={this.handleClick} val='这是某个分类' sp='1'/>
				<div className='center' style={{
	                overflow: 'hidden',
	            }}>
					<AllItem/>
					<Page/>
				</div>
			</section>
		);
	}
});

export default Detail;



