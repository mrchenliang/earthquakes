import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import NavBar from  '../../components/navBar/navBar.component';

import './profile.styles.css';

const Profile = ( {data} ) => {

  // const setProfile = (profile) => {
  //   profile;
  // }
  const profile = data?.profile || {};
  const mappedProfile =  {
    'first name': profile.firstName || "",
    'last name': profile.lastName || "",
    'phone': profile.phone || "",
    'email': profile.email || "",
    'bio': profile.bio || "",
  };
  const profileInfos = Object.keys(mappedProfile);

  return (
    <div id = "profilePage" className = "profilePage">
      <NavBar/>
      <div className = "profileHeader">
        <h3 className = 'profileTitle'>Profile</h3>
        <div className = "profileInfos">
          <img src={profile?.avatarImage} className="profilePhoto" alt="profile photo" />
          <table className = "profileTable">
            <tbody>
              {profileInfos.map(info => {
                return (
                  <tr className = 'profileInfo' key = {info}>
                    <td className = 'profileInfoLabel'>{info}</td>
                    <td className = 'profileInfoValue'>{mappedProfile[info]}</td>
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

const mapStateToProps = state => ({
  data: state.data,
});

// const mapDispatchToProps = dispatch => ({
//   onClick: searchTerm => dispatch({ type: 'SET_PROFILE', profile }),
// });

export default connect(mapStateToProps)(Profile);
