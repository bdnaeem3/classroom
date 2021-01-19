import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Layouts
import PublicTemplate from "./components/templates/PublicTemplate";
import PrivateTemplate from "./components/templates/PrivateTemplate";

// Redux Store
import store from "./redux/store";

// Routes
import routes from "./routes";

// CSS
import "./styles/app.scss";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {routes.map((route, i) => {
            const Component = route.component;
            const Layout =
              route.type === "private" ? PrivateTemplate : PublicTemplate;
            return (
              <Route
                key={i}
                path={route.path}
                exact={route.exact ? route.exact : true}
              >
                <Layout>
                  <Component />
                </Layout>
              </Route>
            );
          })}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
