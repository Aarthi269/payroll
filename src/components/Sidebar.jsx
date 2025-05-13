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
  return (
    <div className="w-64 bg-white shadow-md p-4 border-r border-gray-200">
      <h1 className="text-xl font-bold text-blue-700 mb-6">UIUX Dev ERP System</h1>
      <ul className="space-y-2">
        {menu.map((item) => (
          <li
            key={item}
            className={`cursor-pointer px-2 py-2 rounded hover:bg-blue-50 ${
              item === 'Payroll' ? 'bg-blue-100 font-semibold text-blue-700' : 'text-gray-700'
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
