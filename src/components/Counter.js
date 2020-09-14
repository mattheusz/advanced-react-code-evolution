import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState(prevState => { return { count: prevState.count + 1 } })
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                {this.props.render(count, this.increment)}
            </div>
        );
    }
}

export default Counter;