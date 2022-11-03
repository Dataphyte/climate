import React from 'react';
import PropTypes from 'prop-types';

const MenuIcon = (props) => {
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
        d='M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5'
      />
    </svg>
  );
};

export default MenuIcon;

MenuIcon.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
  strokeWidth: PropTypes.number,
};
