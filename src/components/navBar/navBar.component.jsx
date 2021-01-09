import React from 'react';
import './navBar.styles.css';

const NavBar = () => {
    return (
        <navbar id = "navBar" className = "navBar">
            <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
            <div className="menu-icon">
            </div>
        </navbar>
    );
};

export default NavBar;