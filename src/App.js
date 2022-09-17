import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.min.css";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import Layout from "./Layout/Layout";
import Spinner from "./Components/Spinner/Spinner";

function App() {
  return (
    <div>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Component={HomePage} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/detail/:id"
            element={<Layout Component={DetailPage} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
