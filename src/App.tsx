import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Song from "./pages/Song";
import Artist from "./pages/Artist";
import Album from "./pages/Album";
import Playlist from "./pages/Playlist";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/song/:id" element={<Song />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/playlist/:id" element={<Playlist />} />
        {/* TODO: handle 404 */}
      </Routes>
    </Router>
  );
}

export default App;
