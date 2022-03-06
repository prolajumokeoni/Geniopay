import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Beneficiaries from "./pages/Beneficiaries";
import Fxcentre from "./pages/Fxcentre";

function App() {
  return (
    <div className='d-flex flex-md-row flex-column'>
      <Router>
      <Sidebar />
        <Routes>
          <Route path="/beneficiaries" element={<Beneficiaries />} />
          <Route path="/Fxcentre" element={<Fxcentre />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
