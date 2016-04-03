import React from 'react';
import Item from '../main/item.jsx';
let AllItem = React.createClass({
    displayName: 'AllItem',
    render() {
        return (
            <div style={{
                overflow: 'hidden',
                paddingBottom: '10px'
            }}>
            {
            	React.Children.map([0, 0, 0, 0, 0 ,0 ,0, 0, 0, 0, 0, 0], function (item, index) {
                    return (<Item key={index} keys={index}/>)
                })
            }
            </div>
        );
    }
});

export default AllItem;


