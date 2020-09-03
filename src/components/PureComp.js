import React, { PureComponent } from 'react'

class PureComp extends PureComponent {

    render() {
        console.log('Pure Component');
        return (
            <p>
                Pure Component -> {this.props.nome}
            </p>
        )
    }
}

export default PureComp;