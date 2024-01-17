import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import History from "./screens/History";
import Menu from "./screens/Menu";
import Contact from "./screens/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurMenu" element={<Menu />} />
        <Route path="/History" element={<History />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
