interface KPIProps {
  title: string;
  value: string;
  subtitle: string;
}

const KpiCard = ({ title, value, subtitle }: KPIProps) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-3xl font-bold text-green-600">{value}</p>
    <p className="text-sm text-gray-600">{subtitle}</p>
  </div>
);

export default KpiCard;
