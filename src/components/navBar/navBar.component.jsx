import React from 'react';
import { connect } from 'react-redux';

import icon from '../../assets/icon.svg';

import './navBar.styles.css';

const NavBar = ({ data }) => {
    return (
        <nav id = "navBar" className = "navBar">
            <a href = "/" aria-label="Go to home page">
                <img className = "navBarIcon" src = {icon}/>
            </a>
            <h1 className = "navBarTitle">{data?.site?.title || "(Untitled)"}</h1>
            <a href = "/profile" aria-label="Go to profile page">
                <div className = "navBarUser">Welcome {data?.profile?.firstName || " "}</div>
            </a>
        </nav>
    );
};

const mapStateToProps = state => ({
    data: state.data,
});

export default connect(mapStateToProps)(NavBar);