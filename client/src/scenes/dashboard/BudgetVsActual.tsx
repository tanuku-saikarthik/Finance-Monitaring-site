import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', budget: 2000, actual: 1800 },
  { month: 'Feb', budget: 2200, actual: 2100 },
  { month: 'Mar', budget: 2500, actual: 2600 },
  // Add more data as needed
];

const BudgetVsActual = () => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="budget" fill="#8884d8" />
      <Bar dataKey="actual" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

export default BudgetVsActual;
