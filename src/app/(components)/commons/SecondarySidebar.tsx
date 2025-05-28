// components/SecondarySidebar.tsx
const menus = {
  sales: ["Invoices", "Customers"],
  order: ["All Orders", "Returns"],
  purchase: ["Suppliers", "Bills"],
  account: ["Ledger", "Transactions"],
  hr: ["Employees", "Payroll"],
  report: ["Sales Report", "Profit/Loss"],
  admin: ["User Roles", "Permissions"],
  monitor: ["Live Stats"],
  marketplace: ["Apps", "Integrations"],
  system: ["system","user"],
};

const SecondarySidebar = ({ active }: { active: string }) => {
  const items = menus[active] || [];

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 p-4 h-full">
      <h2 className="text-lg font-semibold capitalize mb-4">{active} Menu</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecondarySidebar;
