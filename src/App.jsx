import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import About from "./pages/About";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/weather" element={<Weather />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
