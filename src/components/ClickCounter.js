import React, { Component } from 'react';

class ClickCounter extends Component {

    render() {
        const { count } = this.props;
        return (
            <div>
                <button onClick={this.props.increment}>Clicked {count} X</button>
            </div>
        );
    }
}

export default ClickCounter;