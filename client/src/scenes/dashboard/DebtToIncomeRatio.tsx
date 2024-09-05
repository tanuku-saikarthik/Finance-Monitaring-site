import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', debtToIncome: 0.3 },
  { month: 'Feb', debtToIncome: 0.4 },
  { month: 'Mar', debtToIncome: 0.35 },
  // Add more data as needed
];

const DebtToIncomeRatio = () => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="debtToIncome" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);

export default DebtToIncomeRatio;
