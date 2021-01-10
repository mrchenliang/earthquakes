import React, { useState } from 'react';
import jsonData from '../../data.json';
import icon from '../../assets/icon.svg';
import './navBar.styles.css';

const NavBar = () => {
    const [data] = useState(JSON.parse(JSON.stringify(jsonData)));
    return (
        <nav id = "navBar" className = "navBar">
            <a href = "/" aria-label="Go to home page">
                <img className = "navBarIcon" src = {icon}/>
            </a>
            <h1 className = "navBarTitle">{data?.site?.title || "(Untitled)"}</h1>
            <a href = "/profile" aria-label="Go to profile page">
                <hi className = "navBarUser">Welcome {data?.profile?.firstName || " "}</hi>
            </a>
        </nav>
    );
};

export default NavBar;