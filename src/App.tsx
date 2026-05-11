import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ComparePage from "./pages/Compare";
//import RouteDetailsPage from "./pages/RouteDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/compare" element={<ComparePage />} />
        {/* <Route path="/route-details" element={<RouteDetailsPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;