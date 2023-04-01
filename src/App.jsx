import "./App.css";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import QNA from "./Pages/QNA/QNA";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <QNA />
      <ToastContainer />
    </div>
  );
}

export default App;
