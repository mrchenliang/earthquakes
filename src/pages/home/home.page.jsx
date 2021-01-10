import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import NavBar from  '../../components/navBar/navBar.component';

import './home.styles.css';

const Home = ( {data} ) => {

  // const setProfile = (profile) => {
  //   profile;
  // }
  const tableColumns = ['Place', 'Magnitude', 'Time']
  const tableBody = data?.data?.features || [];

  const convertTime = time => {
    return moment(time).format() || "(Unknown Time)";
  }
  return (
    <div id = "homePage" className = "homePage">
      <NavBar/>
      <div className = "homeHeader">
          <h3 className = 'homeTitle'>{data?.data?.metadata?.title || "(Untitled)"}</h3>
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
                    <td><a href = "/detail" aria-label="Go to detail page">{earthquake?.properties?.place || "(Unknown Place)"}</a></td>
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

const mapStateToProps = state => ({
  data: state.data,
});

// const mapDispatchToProps = dispatch => ({
//   onClick: searchTerm => dispatch({ type: 'SET_PROFILE', profile }),
// });

export default connect(mapStateToProps)(Home);
