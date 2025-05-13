import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const menu = [
  'Dashboard',
  'Staff',
  'Payment Voucher',
  'Payroll',
  'Memo',
  'Circulars',
  'Maintenance',
  'Logistics',
  'Office Budget',
  'Stocks and Inventory',
  'Notifications',
  'Capacity Building',
  'Procurements',
];

export default function Sidebar() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(''); // Track which button is active

  const handleNavigation = (item) => {
    setActiveItem(item); // Set current item as active

    // Navigation logic
    if (item === 'Payroll') navigate('/payroll');
    if (item === 'Staff') navigate('/staff');
    if (item === 'Payment Voucher') navigate('/payment-voucher');
    if (item === 'Notifications') navigate('/notifications');
  };

  return (
    <div className="w-64 bg-white shadow-md p-4 border-r border-gray-200">
      <h1 className="text-xl font-bold text-blue-700 mb-6">UIUX Dev ERP System</h1>
      <ul className="space-y-2">
        {menu.map((item) => (
          <li key={item}>
            <button
              className={`w-full text-left px-2 py-2 rounded transition ${
                activeItem === item
                  ? 'bg-blue-100 font-semibold text-blue-700'
                  : 'text-gray-700 hover:bg-blue-50'
              }`}
              onClick={() => handleNavigation(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
