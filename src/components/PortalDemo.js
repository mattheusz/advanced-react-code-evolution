import React from 'react';
import ReactDOM from 'react-dom'

function PortalDemo(props) {
    return ReactDOM.createPortal(
        <h1>I'm Portal</h1>,
        document.getElementById('portal-root')
    );
}

export default PortalDemo;
