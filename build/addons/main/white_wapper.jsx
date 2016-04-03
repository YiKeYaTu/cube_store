import React from 'react';
let WhiteWapper = React.createClass({
    render() {
        return (
       		<section style={{
				width: '100%',
				height: this.props.wapperHeight + 'px',
				background: '#fff',
				zIndex: this.props.wapperDisplay ? '1' : '-1',
				opacity: this.props.opacity,
				position: 'fixed',
				top: '0px',
				WebkitTransition: 'opacity .9s',
			    MozTransition: 'opacity .9s',
			    OTransition: 'opacity .9s',
			    MsTransition: 'opacity .9s',
			}} ref="white-wapper"></section>
        );
    }
});

export default WhiteWapper;