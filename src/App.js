import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./components/pages/Shop";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
