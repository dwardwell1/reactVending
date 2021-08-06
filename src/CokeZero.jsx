import React from "react";
import { NavLink} from 'react-router-dom';
function CokeZero() {
  return (
    <div>
      <h1>Coke Zero</h1>
      <img
        src="https://m.media-amazon.com/images/I/51dWWHktriL._SL1000_.jpg"
        alt="Coke Zero"
      />
      <p>So Thirsty</p>
      <NavLink exact to="/">
                    Go Back
        </NavLink>
    </div>
    
  );
}

export default CokeZero;