import React from "react";
import { NavLink} from 'react-router-dom';
function Pretzels() {
  return (
    <div>
      <h1>Pretzels</h1>
      <img
        src="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2020-06/german-style-pretzels-.jpg?itok=MfXjWWv7"
        alt="Pretzels"
      />
      <p>So Many Pretzels</p>
      <NavLink exact to="/">
                    Go Back
        </NavLink>
    
    </div>
  );
}

export default Pretzels;