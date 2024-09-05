import { Progress } from 'antd'; // Using Ant Design's Progress component for simplicity

const EmergencyFundStatus = () => {
  const currentFund = 5000; // Current emergency fund
  const targetFund = 10000; // Target emergency fund

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>Emergency Fund Status</h3>
      <Progress percent={(currentFund / targetFund) * 100} />
      <p>{`₹${currentFund} of ₹${targetFund} saved`}</p>
    </div>
  );
};

export default EmergencyFundStatus;
