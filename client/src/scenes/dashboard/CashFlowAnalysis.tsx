import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', cashFlow: 200 },
  { month: 'Feb', cashFlow: -100 },
  { month: 'Mar', cashFlow: 300 },
  // Add more data as needed
];

const CashFlowAnalysis = () => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="cashFlow" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);

export default CashFlowAnalysis;
