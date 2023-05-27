import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import Select from './pages/Select';
import Admin from './pages/Admin';
import Employee from './pages/Employee';
import Customer from './pages/Customer';
import Cus_info from './pages/Cus_info';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/select" element={<Select />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Employee" element={<Employee />} />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/Cus_info" element={<Cus_info />} />
        
      </Routes>
    </Router>
  );
}

export default App;
