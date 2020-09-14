import React, { Component } from 'react';

class HoverCounter extends Component {

    render() {
        const { count, increment } = this.props;
        return (
            <div>
                <h2 onMouseOver={increment} >Hovered {count} X</h2>
            </div>
        );
    }
}

export default HoverCounter;