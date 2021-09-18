import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Champion from "./pages/Champion";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>

        <Route path="/:champion">
          <Header />
          <Champion />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
