import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Song from "./pages/Song";
import Artist from "./pages/Artist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/song/:id" element={<Song />} />
        <Route path="/artist/:id" element={<Artist />} />
      </Routes>
    </Router>
  );
}

export default App;
