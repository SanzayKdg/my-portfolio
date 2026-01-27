import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";
import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer position="bottom-right" />
    </Router>
  );
};

export default App;
