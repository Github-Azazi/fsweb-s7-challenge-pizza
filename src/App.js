import React from "react";
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import './App.css'
import HomePage from "./Pizza/HomePage";
import OrderPage from "./Pizza/OrderPage";
import SuccessPage from "./Pizza/SuccessPage";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/order" component={OrderPage} />
          <Route exact path="/success" component={SuccessPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;