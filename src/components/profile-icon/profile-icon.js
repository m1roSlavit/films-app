import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const ProfileIcon = () => {
  return (
    <div className='profile-icon'>
      <Link to='/my-profile'>
        <FontAwesomeIcon icon={faUserCircle} size='2x'/>
      </Link>
    </div>
  );
};

export default ProfileIcon;