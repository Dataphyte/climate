import React from 'react';
import PropTypes from 'prop-types';

const ArrowLongRightIcon = (props) => {
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
        d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
      />
    </svg>
  );
};

export default ArrowLongRightIcon;

ArrowLongRightIcon.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
  strokeWidth: PropTypes.number,
};
