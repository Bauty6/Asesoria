// components/SubmitButton.jsx

import React from 'react';


const SubmitButton = ({ onClick, disabled, children, type = "submit", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-primary ${className}`}
    >
      {children || "Enviar"}
    </button>
  );
};

export default SubmitButton;