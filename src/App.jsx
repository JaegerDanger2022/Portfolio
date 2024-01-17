import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import History from "./screens/History";
import Menu from "./screens/Menu";
import Contact from "./screens/Contact";
import MotherComponent from "./component/MotherComponent";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MotherComponent />}>
          <Route path="/" element={<Home />} />
          <Route path="/OurMenu" element={<Menu />} />
          <Route path="/History" element={<History />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
