import '../styles/Dropdown.css';
import React, { useState, useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Dropdown({ title, text, type }) {
  const fontSize = type === 'high' ? 'dropdown-high' : 'dropdown-low';

  const [isOpen, setIsOpen] = useState(false);

  const toggleState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <span className={`dropdown-title ${fontSize}`}>
        {title}
        <FontAwesomeIcon
          onClick={toggleState}
          icon={faAngleDown}
          className={`dropdown-updown ${isOpen ? 'animated' : ''}`}
        />
      </span>
      <span
        style={{ height: isOpen ? `auto` : '0px' }}
        className={`dropdown-text ${fontSize} ${isOpen ? 'animated' : ''}`}
      >
        {text}
      </span>
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['high', 'low']),
};

export default Dropdown;
