import React, { useState } from 'react';

// #1 função HOC recebe um componente
function withCounter(WrappedComponent) {
    // #2 novo componente que será retornado
    function WithCounter(props) {

        const [state, setstate] = useState(0);

        const incrementCount = () => {
            setstate(state + 1);
        }

        // #3 componente recebido sendo aprimorado
        return (
            <WrappedComponent count={state} incrementCount={incrementCount} {...props} />
        )
    }

    return WithCounter;
}

export default withCounter;
