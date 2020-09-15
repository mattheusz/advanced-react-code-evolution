import React, { Component } from 'react';
import axios from 'axios';

class UserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            errorMsg: ''
        }
    }

    submit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/users', this.state)
            .then(response => {
                console.log(response);
            })
            .catch(response => {
                this.setState({ errorMsg: 'Erro ao enviar os dados' })
                console.log(this.state.errorMsg);
            })
    }

    inputHandle = e => {
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {

        const { name, username, email } = this.state

        return (
            <div>
                <form onSubmit={this.submit}>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={this.inputHandle}>
                    </input>
                    <br />
                    <input
                        type='text'
                        name='username'
                        value={username}
                        onChange={this.inputHandle}>
                    </input>
                    <br />
                    <input
                        type='text'
                        name='email'
                        value={email}
                        onChange={this.inputHandle}>
                    </input>
                    <br />
                    <button type='submit'>Enviar</button>

                </form>
            </div>
        );
    }
}

export default UserForm;