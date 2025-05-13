export default function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold">Payroll Dashboard</h2>
        <p className="text-sm text-gray-500">Overview of payroll performance and statistics</p>
      </div>
      <div className="flex items-center gap-4">
        <img
          src="https://ui-avatars.com/api/?name=Otor+John"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">Otor John</p>
          <p className="text-xs text-gray-500">HR Officer</p>
        </div>
      </div>
    </div>
  );
}
