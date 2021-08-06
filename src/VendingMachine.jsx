import React from "react";
import { NavLink} from 'react-router-dom';
import Doritos from './Doritos';
import CokeZero from './CokeZero';
import Pretzels from './Pretzels';

function VendingMachine() {
  return (
    <div className="vending-machine">
        <h1>Vending Machine</h1>
        <h3>What would you Like to eat?</h3>
        <ul>
            <li><NavLink exact to="/doritos">
                    Doritos
                </NavLink>
            </li>
            <li><NavLink exact to="/cokezero">
                    Coke Zero
                </NavLink>
            </li>
            <li><NavLink exact to="/pretzels">
                    Pretzels
                </NavLink>
            </li>
        </ul>
    </div>
  );
}

export default VendingMachine;