import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({
                    users: response.data
                })
                console.log(response);
            })
            .catch(reject => {
                this.setState({
                    errorMsg: 'Erro ao buscar informações.'
                })
                console.log(reject);
            })
    }


    render() {
        const { users } = this.state
        return (
            <div>
                <h3>User List</h3>
                {
                    users.length ?
                        users.map(({ id, name, phone }) => {
                            return <div key={id} >{name} - {phone}</div>
                        }) :
                        null

                }
            </div>
        );
    }
}

export default PostList;