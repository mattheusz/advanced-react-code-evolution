import React, { useState } from 'react';

function HoverCounter(props) {
    const [state, setstate] = useState(0);

    const incrementCount = () => {
        setstate(state + 1);
    }

    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hovered {state} times</h1>
        </div>
    );
}

export default HoverCounter;