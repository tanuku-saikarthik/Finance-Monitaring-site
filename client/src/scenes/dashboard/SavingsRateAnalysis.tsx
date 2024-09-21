import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', savingsRate: 20 },
  { month: 'Feb', savingsRate: 30 },
  { month: 'Mar', savingsRate: 50 },
  // Add more data as needed
];

const SavingsRateAnalysis = () => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="savingsRate" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
);

export default SavingsRateAnalysis;
