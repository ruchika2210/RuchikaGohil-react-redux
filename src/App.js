import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/product/:id" element={<Product />}></Route>

          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
