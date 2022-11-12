import React from 'react';
import {Config} from '../Config/Config';
import { NavLink } from 'react-router-dom';

class Head extends React.Component{
    render(){
        return(
            <nav className="navbar container-fluid navbar-expand-lg py-3" style={Config.container.style}>
                <div className="container-fluid">
                    <NavLink to={'/'}><img src={Config.logo.img} style={Config.logo.style} alt={Config.logo.alt} className='navbar-brand d-inline-block align-middle mr-2' /></NavLink>
                </div>
            </nav>
        );
    }
}

export default Head;