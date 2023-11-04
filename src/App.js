import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, NavigationBar, AnimeInfo, Footer, Watch } from "./Components";
import "./index.css";

function App() {
  const webURL = "renskiedulog.github.io/AnimeSensei";
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path={`/${webURL}/`} element={<Home />}>
          <Route index element={<Home />} />
          <Route path={`/${webURL}/:page`} element={<Home />} />
          <Route path={`/${webURL}/top&:page`} element={<Home />} />
          <Route path={`/${webURL}/search/:query`} element={<Home />} />
          <Route path={`/${webURL}/search/:query/:page`} element={<Home />} />
        </Route>

        <Route
          path={`/${webURL}/info/:animeId`}
          exact
          element={<AnimeInfo />}
        />

        <Route
          path={`/${webURL}/:animeId/watch/:episodeId`}
          exact
          element={<Watch />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
