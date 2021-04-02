import './style/App.scss';
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <h2>Êtes-vous prêt.e à faire de grandes choses en React ?</h2>
      <Login/>
      <Welcome/>
    </div>
  );
}

export default App;
