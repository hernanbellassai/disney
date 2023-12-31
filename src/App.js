import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
