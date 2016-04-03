import React from 'react';

let Page = React.createClass({
    displayName: 'Page',
    render() {
        return (
           <div style={{
                margin: '30px 0 20px 1%',
                overflow: 'hidden'
           }}>
                <Button val='-' sp='-1'/>
                <Button focus='true' val='1'/>
                <Button val='2'/>
                <Button val='3'/>
                <Button val='4'/>
                <Button val='...'/>
                <Button val='90'/>
                <Button val='+' sp='1'/>
           </div>
        );
    }
});

let Button = React.createClass({
    render () {
        return (
            <a className='page-button' style={{
                width: '40px',
                height: '40px',
                lineHeight: '40px',
                textAlign: 'center',
                border: 'none',
                display: 'block',
                float: 'left',
                borderTopRightRadius: this.props.sp == 1 ? '6px' : '0px',
                borderBottomRightRadius: this.props.sp == 1 ? '6px' : '0px',
                borderTopLeftRadius: this.props.sp == -1 ? '6px' : '0px',
                borderBottomLeftRadius: this.props.sp == -1 ? '6px' : '0px',
                fontSize: '18px',
                background: this.props.focus == 'true' ? '#00BFFF' : '#666',
                color: '#fff',
                cursor: 'pointer',
                WebkitTransition: 'all .4s',
                MozTransition: 'all .4s',
                OTransition: 'all .4s',
                MsTransition: 'all .4s',
                outline: 'none'
            }}>
                {this.props.val}
            </a>
        )
    }
})
export default Page;


