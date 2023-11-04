import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, NavigationBar, AnimeInfo, Footer, Watch } from "./Components";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/AnimeSensei" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="/AnimeSensei/:page" element={<Home />} />
          <Route path="/AnimeSensei/top" element={<Home />} />
          <Route path="/AnimeSensei/top&:page" element={<Home />} />
          <Route path="/AnimeSensei/search/:query" element={<Home />} />
          <Route path="/AnimeSensei/search/:query/:page" element={<Home />} />
        </Route>

        <Route
          path="/AnimeSensei/info/:animeId"
          exact
          element={<AnimeInfo />}
        />

        <Route
          path="/AnimeSensei/:animeId/watch/:episodeId"
          exact
          element={<Watch />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
