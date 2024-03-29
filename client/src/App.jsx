import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from './pages/Register'
function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        {/* <Home /> */}
        <Register />
      </div>
    </>
  );
}

export default App;
