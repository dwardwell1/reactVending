import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import Home from './Home';
import Drink from './Drink';
import Eat from './Eat';
import NavBar from './NavBar';
import Doritos from './Doritos';
import CokeZero from './CokeZero';
import Pretzels from './Pretzels';
import VendingMachine from './VendingMachine';

import './App.css';

// function App() {
//   return (
//     <main className="App">
//       <BrowserRouter>
//       <NavBar />
//       <Route exact path="/" component={Home} />
//       <Route exact path="/eat" component={Eat} />
//       <Route exact path="/drink" component={Drink} />
//       </BrowserRouter>
//     </main>
//   );
// }

function App() {
  return (
    <main className="App">
      <BrowserRouter>
      
      <Route exact path="/" component={VendingMachine} />
      <Route exact path="/doritos" component={Doritos} />  
      <Route exact path="/pretzels" component={Pretzels} />
      <Route exact path="/cokezero" component={CokeZero} />
      </BrowserRouter>
    </main>
  );
}

export default App;
