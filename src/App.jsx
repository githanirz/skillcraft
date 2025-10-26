import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailCourse from "../pages/DetailCourse";
import HomePage from "../pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detailcourse" element={<DetailCourse />} />
      </Routes>
    </Router>
  );
}

export default App;
