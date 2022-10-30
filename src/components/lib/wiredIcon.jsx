'use client';

import lottie from 'lottie-web';
import PropTypes, { number, string } from 'prop-types';
import React, { useEffect } from 'react';
import { defineElement } from 'lord-icon-element';

const WiredIcon = ({ src, trigger, dimension, pointer, colors, sx }) => {
  useEffect(() => {
    defineElement(lottie.loadAnimation);
  });

  return (
    <lord-icon
      src={src}
      trigger={trigger}
      colors={`primary:${colors[0]},secondary:${colors[1]}`}
      state='morph'
      style={{
        width: `${dimension[0]}px`,
        height: `${dimension[1]}px`,
        cursor: pointer && 'pointer',
        ...sx,
      }}
    />
  );
};

WiredIcon.propTypes = {
  pointer: PropTypes.bool,
  dimension: PropTypes.exact([number, number]).isRequired,
  src: PropTypes.string.isRequired,
  colors: PropTypes.exact([string, string]).isRequired,
  trigger: PropTypes.oneOf(['hover', 'click', 'loop', 'morph']),
  sx: PropTypes.object,
};

export default WiredIcon;
