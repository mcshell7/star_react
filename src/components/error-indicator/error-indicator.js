import React from "react";

import './error-indicator.scss';
import icon from './error_icon.png'
const ErrorIndicator = () => {
  return(
    <div className="error-indicator">
      <img src={icon} alt="Error icon "/>
      <span className="boom">Boom!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent droids to fix it )</span>
    </div>
  );
}

export default ErrorIndicator;