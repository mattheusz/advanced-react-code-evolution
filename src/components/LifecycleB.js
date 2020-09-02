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
        console.log('Lifecyle B - getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Lifecyle B - shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevUpdate) {
        console.log('Lifecyle B - getSnapshotBeforeUpdate');
        return null;
    }

    componentDidMount() {
        console.log('Lifecyle B - componentDidMount');
    }

    componentDidUpdate() {
        console.log('Lifecyle B - componentDidUpdate');
    }

    render() {
        console.log('Lifecyle B - render');
        return <>I am Lifecycle B</>
    }
}