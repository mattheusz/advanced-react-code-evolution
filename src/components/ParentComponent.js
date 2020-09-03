import React, { Component } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComponent from './MemoComponent';

class ParentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: 'Matheus'
        }
        this.counter = 0;
    }

    componentDidMount() {
        setInterval(() => this.setState({ nome: this.counter++ }), 3000)
    }

    render() {
        console.log('***** Parent Component *****');
        return (
            <div>
                <p>Father Component</p>
                <MemoComponent nome={this.state.nome} />
                {/* <RegComp nome={this.state.nome} /> */}
                {/* <PureComp nome={this.state.nome} /> */}
            </div>
        );
    }
}

export default ParentComponent;