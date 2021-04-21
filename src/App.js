import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import main from "./pages/main";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={main}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
