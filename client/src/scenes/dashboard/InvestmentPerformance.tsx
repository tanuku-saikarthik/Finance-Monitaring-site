import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', investmentValue: 10000 },
  { month: 'Feb', investmentValue: 10200 },
  { month: 'Mar', investmentValue: 10400 },
  // Add more data as needed
];

const InvestmentPerformance = () => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="investmentValue" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
);

export default InvestmentPerformance;
