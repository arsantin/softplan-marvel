import { React } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import Profile from "./components/Profile";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:id" children={<Profile />} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
