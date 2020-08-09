import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import StudentForm from "./components/StudentFrom";
import Students from "./components/Students";
import UpdateStudent from "./components/UpdateStudent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Students} />
          <Route path="/create" component={StudentForm} />
          <Route path="/update" component={UpdateStudent} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
