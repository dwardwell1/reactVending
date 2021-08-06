import React from "react";
import { NavLink} from 'react-router-dom';
function Doritos() {
  return (
    <div>
      <h1>Cheesy Ritos</h1>
      <img
        src="https://www.kroger.com/product/images/large/top/0002840009089"
        alt="Cheesy Doritoes."
      />
      <p>So tasty!</p>
      <NavLink exact to="/">
                    Go Back
        </NavLink>
    </div>
  );
}

export default Doritos;