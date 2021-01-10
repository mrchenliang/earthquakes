import React from 'react';
import { connect } from 'react-redux';

import NavBar from  '../../components/navBar/navBar.component';

import './detail.styles.css';

const Detail = ({ currentEarthquake }) => {

  const detail = currentEarthquake || {};
  const mappedDetail =  {
    'Place': detail?.properties?.place || "",
    'Magnitude': detail?.properties?.mag || "",
    'time': detail?.properties?.time || "",
    'status': detail?.properties?.status || "",
    'tsunami': detail?.properties?.tsunami,
    'type': detail?.properties?.type || "",
  };
  const detailInfos = Object.keys(mappedDetail);

  return (
    <div id = "detailPage" className = "detailPage">
      <NavBar/>
      <div className = "detailHeader">
        <h3 className = 'detailTitle'>{currentEarthquake?.properties?.title}</h3>
        <div className = "detailInfos">
          <table className = "detailTable">
            <tbody>
              {detailInfos.map(info => {
                return (
                  <tr className = 'detailInfo' key = {info}>
                    <td className = 'detailInfoLabel'>{info}</td>
                    <td className = 'detailInfoValue'>{mappedDetail[info]}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
    return {
      currentEarthquake: state.currentEarthquake,
    }
  };

export default connect(mapStateToProps)(Detail);
