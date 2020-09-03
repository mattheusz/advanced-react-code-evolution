import React from 'react';

function MemoComponent(props) {
    console.log("I'm Memo Component");
    return (
        <div>
            I'm MemoComponent {props.nome}
        </div>
    );
}

export default React.memo(MemoComponent);