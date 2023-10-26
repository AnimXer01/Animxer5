import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, NavigationBar } from "./Components";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="/:page" element={<Home />} />
          <Route path="top" element={<Home />} />
          <Route path="latest-episodes" element={<Home />} />
          <Route path="/search/:query" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
