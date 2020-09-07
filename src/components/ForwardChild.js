import React from 'react';

const ForwardChild = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} />
    );
})

export default ForwardChild;