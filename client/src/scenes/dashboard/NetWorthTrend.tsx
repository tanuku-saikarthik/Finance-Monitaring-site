import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', netWorth: 5000 },
  { month: 'Feb', netWorth: 5200 },
  { month: 'Mar', netWorth: 5400 },
  // Add more data as needed
];

const NetWorthTrend = () => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="netWorth" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

export default NetWorthTrend;
