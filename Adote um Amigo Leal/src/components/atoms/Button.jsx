import React from 'react';
import './Button.css';

const Button = ({ children, onClick, type = 'button', variant = 'primary', fullWidth = false }) => {
  return (
    <button
      className={`btn btn-${variant} ${fullWidth ? 'btn-full' : ''}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;