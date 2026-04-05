import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Connect from "./pages/Connect";
import Achievements from "./pages/Achievements/Achievements";
import Certifications from "./pages/Achievements/Certifications";
import Badges from "./pages/Achievements/Badges";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="connect" element={<Connect />} />
          <Route path="achievements" element={<Achievements />}>
            <Route index element={<Certifications />} />
            <Route path="certifications" element={<Certifications />} />
            <Route path="badges" element={<Badges />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
