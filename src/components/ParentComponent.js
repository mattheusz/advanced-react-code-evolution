import React, { Component } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';

class ParentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: 'Matheus'
        }
    }

    componentDidMount() {
        setInterval(() => this.setState({ nome: 'José' }), 3000)
    }

    render() {
        console.log('***** Parent Component *****');
        return (
            <div>
                <RegComp nome={this.state.nome} />
                <PureComp nome={this.state.nome} />
            </div>
        );
    }
}

export default ParentComponent;