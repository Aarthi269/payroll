// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CreateSalaryDefinition from './pages/CreateSalaryDefinition';
import CreateTaxDefinition from './pages/CreateTaxDefinition';
import CreatePayRollDefinition from './pages/CreatePayRollDefinition';
import CreatePaySlipDefinition from './pages/CreatePaySlipDefinition';
import PayslipView from './pages/PayslipView';
import SalaryChart from './components/SalaryChart';
import AllStaff from './components/AllStaff'; // ✅ Import AllStaff
import AddNewStaff from './components/AddNewStaff'; // ✅ NEW
import EditStaffProfile from './components/EditStaffProfile'; // ✅ NEW
import PaymentVoucherPage from './components/PaymentVoucherPage';
import CreatePaymentVoucher from './components/CreatePaymentVoucher';
import NotificationsPage from './components/NotificationsPage';
import HRNotificationDetail from './components/HRNotificationDetail';

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50 text-sm font-sans">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/create-salary-definition" element={<CreateSalaryDefinition />} />
            <Route path="/create-tax-definition" element={<CreateTaxDefinition />} />
            <Route path="/create-payroll-definition" element={<CreatePayRollDefinition />} />
            <Route path="/create-payslip-definition" element={<CreatePaySlipDefinition />} />
            <Route path="/payslip-view" element={<PayslipView />} />
            <Route path="/payroll" element={<><Header /><SalaryChart /></>} />
            <Route path="/staff" element={<AllStaff />} /> {/* ✅ Existing */}
            <Route path="/add-staff" element={<AddNewStaff />} /> {/* ✅ New */}
            <Route path="/edit-staff-profile" element={<EditStaffProfile />} /> {/* ✅ New */}
            <Route path="/payment-voucher" element={<PaymentVoucherPage />} /> {/* ✅ New */}
            <Route path="/create-payment-voucher" element={<CreatePaymentVoucher />} /> {/* ✅ New */}
            <Route path="/notifications" element={<NotificationsPage />} /> {/* ✅ New */}
            <Route path="/hr-notification" element={<HRNotificationDetail />} /> {/* ✅ New */}
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
