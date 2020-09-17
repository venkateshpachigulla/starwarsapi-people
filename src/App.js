import React, { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import SearchPage from "./SearchPage/SearchPage";

function App() {
  const [userName, setUserName] = useState("");
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login setUserName={setUserName} />
          </Route>
          <Route path="/search">
            <Header userName={userName} setUserName={setUserName} />
            <SearchPage userName={userName} />
          </Route>
          <Route path="/">
            <Login setUserName={setUserName} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
