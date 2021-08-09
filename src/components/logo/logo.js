import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/'>
        <FontAwesomeIcon icon={faPlay} size='3x'/>
      </Link>
    </div>
  );
};

export default Logo;