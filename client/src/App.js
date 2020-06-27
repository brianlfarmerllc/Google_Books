import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header"
import Search from "./pages/Search/Search"
import Saved from "./pages/Saved/Saved"


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={["/", "/search"]}>
          <Search />
        </Route>
        <Route exact path="/saved">
          <Saved />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
