import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Studymaterial from "./pages/Studymaterial";

function App() {
  return (
    <>
      <div className="main">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/study" element={<Studymaterial/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
