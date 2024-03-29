import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from './pages/Register'
import Login from "./pages/Login"
function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        {/* <Home /> */}
        <Login />
      </div>
    </>
  );
}

export default App;
