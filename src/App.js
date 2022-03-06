import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Beneficiaries from "./pages/Beneficiaries";
import Fxcentre from "./pages/Fxcentre";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/beneficiaries" element={<Beneficiaries />} />
          <Route path="/Fxcentre" element={<Fxcentre />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
