import React, { Component } from 'react'

export default class LifecycleB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: 'Canjiquinha'
        }
        console.log('Lifecyle B - constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState) { // Rarely Used
        console.log('Lifecyle B - getDeriverdStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('Lifecyle B - componentDidMount');
    }

    render() {
        console.log('Lifecyle B - render');
        return <>I am Lifecycle B</>
    }
}