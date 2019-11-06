import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import EventsListContainer from "./components/EventsListContainer";
import EventDetailsContainer from "./components/EventDetailsContainer"
// import LoginFormContainer from "./components/LoginFormContainer"

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          {/* <Route path="/login" exact component={LoginFormContainer} /> */}
          <Route path="/" exact component={EventsListContainer} />
          <Route path="/event/:id" component={EventDetailsContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
