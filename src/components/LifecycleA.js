import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

export default class LifecycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: 'Canjiquinha'
        }
        console.log('Lifecyle A - constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState) { // Rarely Used
        console.log('Lifecyle A - getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Lifecyle A - shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevUpdate) {
        console.log('Lifecyle A - getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('Lifecyle A - componentDidUpdate');
    }

    componentDidMount() {
        console.log('Lifecyle A - componentUpdate');
    }

    atualiza = () => this.setState({ nome: 'Giancarlo' })

    render() {
        console.log('Lifecyle A - render');
        return (
            <>
                <p>I am {this.state.nome}</p>
                <button onClick={this.atualiza}>Atualiza</button>
                <LifecycleB />
            </>)
    }
}