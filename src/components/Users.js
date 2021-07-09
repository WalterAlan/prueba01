import React, { Component } from 'react'
import axios from 'axios'
export default class Users extends Component {
    state = {
        username: '',
        users: []
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data
        });
    }


    render() {
        return (
            <div className="list">

                Users

                
                    { this.state.users.map(user=> ( 
                    <li className="list-group" >
                         {user.username}
                        
                            
                    </li>
                    ))}

               
            </div>
        )
    }
}
