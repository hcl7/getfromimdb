import React from 'react';
import Logo from './Logo';
import {Config} from '../Config/Config';

const toolbar = (props) => (
    <header className="navbar container-fluid navbar-expand-lg py-3" style={Config.container.style}>
        <div className="container-fluid">
            <Logo />
        </div>
    </header>
);

export default toolbar;