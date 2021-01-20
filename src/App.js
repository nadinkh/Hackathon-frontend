import Background from '../src/components/BloodOcean.png'
import "./App.css";
import Home from "../src/components/Home";
import Dashboard from "../src/components/Dashboard";
import DataDisplay from "../src/components/DataDisplay";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: {Background}, backgroundSize:"cover", width:'100%', height:'100%'

    }} id ="bg">
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/Home" component={Home}></Route>
          <Route exact path="/DataDisplay" component={DataDisplay}></Route>
          <Route>
            <ul>
            <li>
                <Link to="/DataDisplay">Data Display</Link>
              </li>
              <li>
                <Link to="/Dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
