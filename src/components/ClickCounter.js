import React, { useState } from 'react';

function ClickCounter(props) {

    const [state, setstate] = useState(0);

    const incrementCount = () => {
        setstate(state + 1);
    }

    return (
        <div>
            <button onClick={incrementCount}>Clicked {state} times</button>
        </div>
    );
}

export default ClickCounter;