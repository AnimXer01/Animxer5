import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, NavigationBar, AnimeInfo, Footer, Watch } from "./Components";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="/:page" element={<Home />} />
          <Route path="top&:page" element={<Home />} />
          <Route path="/search/:query" element={<Home />} />
          <Route path="/search/:query/:page" element={<Home />} />
        </Route>

        <Route path="/info/:id" exact element={<AnimeInfo />} />

        <Route path="/watch/:episodeId" exact element={<Watch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
