import React from 'react';

const Button = ({ children, handleClick, customClasses }) => {
  return (
    <button className={`btn ${customClasses ? customClasses : ''}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
