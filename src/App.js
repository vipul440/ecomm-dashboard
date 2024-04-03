import logo from "./logo.svg";
import "./App.css";
// import { Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>E-Comm Project</h1>
        <Routes>
          <Route path="/login" element={<Login />}>
            Login
          </Route>
          <Route path="/register" element={<Register />}>
            Register
          </Route>
          <Route path="/add" element={<AddProduct />}>
            AddProduct
          </Route>
          <Route path="/update" element={<UpdateProduct />}>
            UpdateProduct
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
