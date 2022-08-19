import "./App.css";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <Layout>
      <ToastContainer/>
      <Switch>
        {routes.map((route) => {
          return <Route key={Date.now()} {...route} />;
        })}
      </Switch>
    </Layout>
    
  );
};

export default App;
