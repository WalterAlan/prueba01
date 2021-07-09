
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Navigation extends Component {
    render() {
        return (


            <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
               <div className="container">
               <Link className="navbar-brand" to="/">
                   
                   MyLife
                   </Link>

<form class="form-inline">
    <input class="form-control mr-sm-4" type="search" placeholder="Buscar en MyLife"  />
        
 </form>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
               <Link className="nav-link" to="/">TimeLine</Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link" to="/users">Users</Link>
            </li>
           
            
        </ul>
    </div>


               </div>
            </nav>




        )
    }
}
export default Navigation;
