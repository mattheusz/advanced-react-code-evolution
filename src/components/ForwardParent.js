import React, { Component } from 'react';
import ForwardChild from './ForwardChild';

class ForwardParent extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();  // #1 criando uma ref
    }

    // #3 método que acessa o nó do class component Input e aplica o método focusInput()
    clickHandler = () => {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <ForwardChild ref={this.inputRef} />   {/* #2 associa a ref ao class component Input  */}
                <br />
                <button onClick={this.clickHandler}>Foque no input acima</button>
            </div>
        );
    }
}

export default ForwardParent;