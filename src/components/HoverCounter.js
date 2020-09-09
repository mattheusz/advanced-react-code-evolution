import React from 'react';
import withCounter from './withCounter';

function HoverCounter(props) {

    const { incrementCount, count, nome } = props;

    return (
        <div>
            <h1 onMouseOver={incrementCount}>{nome} Hovered {count} times</h1>
        </div>
    );
}

export default withCounter(HoverCounter);