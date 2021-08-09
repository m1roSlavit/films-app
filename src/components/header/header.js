import React from 'react';
import SearchPanel from "../search-panel";
import Logo from "../logo";
import ProfileIcon from "../profile-icon";

const Header = () => {
  return (
    <div className='header mb-4 py-2 px-3 d-flex navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='me-5'>
        <Logo />
      </div>
      <div className='w-100 me-5'>
        <SearchPanel />
      </div>
      <div className='ms-auto'>
        <ProfileIcon />
      </div>
    </div>
  );
};

export default Header;