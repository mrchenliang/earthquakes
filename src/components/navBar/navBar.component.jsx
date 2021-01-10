import React from 'react';
import { connect } from 'react-redux';

import icon from '../../assets/icon.svg';

import './navBar.styles.css';

const NavBar = ({ site, profile }) => {
    return (
        <nav id = "navBar" className = "navBar">
            <a href = "/" aria-label="Go to home page">
                <img className = "navBarIcon" src = {icon}/>
            </a>
            <h1 className = "navBarTitle">{site?.title || "(Untitled)"}</h1>
            <a href = "/profile" aria-label="Go to profile page">
                <div className = "navBarUser">Welcome {profile?.firstName || " "}</div>
            </a>
        </nav>
    );
};

const mapStateToProps = state => {
  return {
    site: state.site,
    profile: state.profile,
  }
};

export default connect(mapStateToProps)(NavBar);