import { Box, useMediaQuery } from "@mui/material";
import IncomeExpenseAnalysis from "./IncomeExpenseAnalysis";
import CategorySpendingAnalysis from "./CategorySpendingAnalysis";
import SavingsRateAnalysis from "./SavingsRateAnalysis";
import DebtToIncomeRatio from "./DebtToIncomeRatio";
import NetWorthTrend from "./NetWorthTrend";
import CashFlowAnalysis from "./CashFlowAnalysis";
import BudgetVsActual from "./BudgetVsActual";
import InvestmentPerformance from "./InvestmentPerformance";
import EmergencyFundStatus from "./EmergencyFundStatus";
import DashboardBox from "../../components/DashboardBox";

const gridTemplateLargeScreens = `
  "incomeExpense incomeExpense categorySpending"
  "incomeExpense incomeExpense categorySpending"
   "incomeExpense incomeExpense categorySpending"
  "savingsRate debtToIncome netWorth"
  "savingsRate debtToIncome netWorth"
  "cashFlow budgetVsActual investmentPerformance"
  "cashFlow budgetVsActual investmentPerformance"
`;

const gridTemplateSmallScreens = `
  "incomeExpense"
  "incomeExpense"
  "categorySpending"
  "categorySpending"
  "savingsRate"
  "debtToIncome"
  "netWorth"
  "cashFlow"
  "budgetVsActual"
  "investmentPerformance"
`;

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(7, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      
        <DashboardBox gridArea= "incomeExpense" >
        <IncomeExpenseAnalysis />
        </DashboardBox>
   
      <DashboardBox gridArea= "categorySpending" >
        <CategorySpendingAnalysis />
        </DashboardBox>
    
      <DashboardBox gridArea= "savingsRate" >
        <SavingsRateAnalysis />
        </DashboardBox>
 
      <DashboardBox gridArea= "debtToIncome" >
        <DebtToIncomeRatio />
        </DashboardBox>
      <DashboardBox gridArea= "netWorth" >
        <NetWorthTrend />
        </DashboardBox>
      <DashboardBox gridArea= "cashFlow" >
        <CashFlowAnalysis />
        </DashboardBox>
      <DashboardBox gridArea= "budgetVsActual" >
        <BudgetVsActual />
        </DashboardBox>
      <DashboardBox gridArea= "investmentPerformance" >
        <InvestmentPerformance />
        </DashboardBox>
  {  /*  <DashboardBox gridArea= "emergencyFund" >
        <EmergencyFundStatus />
        </DashboardBox>*/}
      
    </Box>
  );
};

export default Dashboard;
