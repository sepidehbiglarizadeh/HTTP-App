import "./App.css";
import Discussion from "./Container/Discussion/Discussion";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="container">
      <ToastContainer/>
      <Discussion/>
    </div>
  );
};

export default App;
