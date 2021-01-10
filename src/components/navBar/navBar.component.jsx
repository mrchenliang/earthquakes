import React, { useState } from 'react';
import jsonData from '../../data.json';
import './navBar.styles.css';

const NavBar = () => {
    const [data, setData] = useState(JSON.parse(JSON.stringify(jsonData)));
    return (
        <nav id = "navBar" className = "navBar">
            <h1 className="navbar-logo">{data.site.title}<i className="fab fa-react"></i></h1>
            <div className="menu-icon">
            </div>
        </nav>
    );
};

export default NavBar;