import React from 'react';
import PropTypes from 'prop-types';

const PersonIcon = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={props.fill | 'white'}
      viewBox='0 0 24 24'
      strokeWidth={props.strokeWidth | 1.5}
      stroke='currentColor'
      className={`w-4 h-4 ${props.className}`}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
      />
    </svg>
  );
};

export default PersonIcon;

PersonIcon.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
  strokeWidth: PropTypes.number,
};
