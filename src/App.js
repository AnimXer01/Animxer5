import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, NavigationBar } from "./Components";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
