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
        console.log('Lifecyle A - getDeriverdStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('Lifecyle A - componentDidMount');
    }

    render() {
        console.log('Lifecyle A - render');
        return (
            <>
                <p>I am Lifecycle A</p>
                <LifecycleB />
            </>)
    }
}