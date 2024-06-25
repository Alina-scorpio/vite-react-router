import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>Профіль</h1>
      <nav className='submenu'>
        <NavLink to="info" activeClassName="active">Profile Info</NavLink>
        <NavLink to="settings" activeClassName="active">Profile Settings</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Profile;
