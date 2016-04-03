import React from 'react';
import HotItem from './index/hot_item.jsx';
import Inf from './index/inf.jsx';
let Index = React.createClass({
	render () {
		return (
			<section>
				<Inf val='最热'/>
				<HotItem val='最热'/>
				<Inf val='最新'/>
				<HotItem val='最新'/>
			</section>
		);
	}
});

export default Index;



