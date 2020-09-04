import React, { Component } from 'react';

class Input extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();  // #1 cria uma ref
    }

    // #3 cria um método chamado focusInput() com a habilidade dar foco no input (associa-o ao nó DOM)
    focusInput() {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <input ref={this.inputRef} />   /* #2 associa a ref criada ao input */
        );
    }
}

export default Input;