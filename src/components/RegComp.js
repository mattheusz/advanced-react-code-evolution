import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log('Regular Component');
        return (
            <p>
                Regular Component -> {this.props.nome}
            </p>
        )
    }
}

export default RegComp;