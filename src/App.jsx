// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header'; // Import the Header component
import CreateSalaryDefinition from './pages/CreateSalaryDefinition';
import CreateTaxDefinition from './pages/CreateTaxDefinition';
import CreatePayRollDefinition from './pages/CreatePayRollDefinition';
import CreatePaySlipDefinition from './pages/CreatePaySlipDefinition';
import PayslipView from './pages/PayslipView';
import SalaryChart from './components/SalaryChart';

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50 text-sm font-sans">
        <Sidebar />
        <div className="flex-1 p-6">
          <Header />
          <Routes>
            <Route path="/create-salary-definition" element={<CreateSalaryDefinition />} />
            <Route path="/create-tax-definition" element={<CreateTaxDefinition />} />
            <Route path="/create-payroll-definition" element={<CreatePayRollDefinition />} />
            <Route path="/create-payslip-definition" element={<CreatePaySlipDefinition />} />
            <Route path="/payslip-view" element={<PayslipView />} />
            <Route path="/" element={<SalaryChart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
