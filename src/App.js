import './style/App.scss';
import '../node_modules/@fortawesome/fontawesome-free/js/all.min';

import Login from "./components/pages/Login";
import Welcome from "./components/pages/Welcome";
import Navigation from "./components/molecules/Navigation";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>Êtes-vous prêt.e à faire de grandes choses en React ? <i className="fas fa-atom"></i></h2>
        <Navigation/>
        <Switch>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/welcome'>
            <Welcome/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
