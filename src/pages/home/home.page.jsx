import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

import { loadCurrentEarthquake } from '../../redux/actions';
import NavBar from  '../../components/navBar/navBar.component';

import './home.styles.css';

const Home = ({ data, loadCurrentEarthquake }) => {

  const tableColumns = ['Place', 'Magnitude', 'Time']
  const tableBody = data?.features || [];

  const convertTime = time => {
    return moment(time).format() || "(Unknown Time)";
  }
  return (
    <div id = "homePage" className = "homePage">
      <NavBar/>
      <div className = "homeHeader">
          <h3 className = 'homeTitle'>{data?.metadata?.title || "(Untitled)"}</h3>
          <table className = "homeTable">
            <thead className = "homeTableHeader" key="thead">
              <tr>
                {tableColumns.map(column => (
                  <th key = {column} >{column}</th>
                ))}
              </tr>
            </thead>
            <tbody className = "homeTableBody" key="tbody">
              {tableBody.map(earthquake => {
                return (
                  <tr key = {earthquake.id}>
                    <td><Link to= "/detail" aria-label="Go to detail page" onClick={() => loadCurrentEarthquake(earthquake)}>{earthquake?.properties?.place || "(Unknown Place)"}</Link></td>
                    <td>{earthquake.properties?.mag || "(Unknown Magnitude)"}</td>
                    <td>{convertTime(earthquake.properties?.time)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadCurrentEarthquake: (earthquake) => dispatch(loadCurrentEarthquake(earthquake))
  }
} ;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
