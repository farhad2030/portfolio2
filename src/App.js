import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
