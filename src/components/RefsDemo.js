import React, { Component } from 'react';
import Input from './Input';

class RefsDemo extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();  // #1 criando uma ref
    }

    focus = () => {
        this.inputRef.current.focusInput();
    }

    render() {
        return (
            <div>
                <Input ref={this.inputRef} />
                <br />
                <button onClick={this.focus}>Foque no input acima</button>
            </div>
        );
    }
}

export default RefsDemo;