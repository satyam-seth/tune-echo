import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Song from "./pages/Song";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>
    </Router>
  );
}

export default App;
