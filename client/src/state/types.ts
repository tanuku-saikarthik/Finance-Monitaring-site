// ExpensesByCategory Interface
export interface ExpensesByCategory {
  housing: number;
  food: number;
  transportation: number;
  utilities: number;
  insurance: number;
  healthcare: number;
  savings: number;
  entertainment: number;
  miscellaneous: number;
}

// MonthlyData Interface
export interface MonthlyData {
  id: string;
  month: string;
  income: number;
  expenses: number;
  savings: number;
  investments: number;
  liabilities: number;
}

// DailyData Interface
export interface DailyData {
  id: string;
  date: string;
  income: number;
  expenses: number;
}

// GetUserProfileResponse Interface
export interface GetUserProfileResponse {
  id: string;
  _id: string;
  __v: number;
  name: string;
  age: number;
  occupation: string;
  annual_income: number;
  financial_goals: string;
  createdAt: string;
  updatedAt: string;
}

// GetSavingsResponse Interface
export interface GetSavingsResponse {
  id: string;
  _id: string;
  __v: number;
  user: string; // ObjectId referring to the User
  amount: number;
  date: string;
  createdAt: string;
  updatedAt: string;
}

// GetLiabilitiesResponse Interface
export interface GetLiabilitiesResponse {
  id: string;
  _id: string;
  __v: number;
  user: string; // ObjectId referring to the User
  type: string;
  amount: number;
  date: string;
  createdAt: string;
  updatedAt: string;
}

// GetInvestmentsResponse Interface
export interface GetInvestmentsResponse {
  id: string;
  _id: string;
  __v: number;
  user: string; // ObjectId referring to the User
  type: string;
  amount: number;
  date: string;
  createdAt: string;
  updatedAt: string;
}

// GetIncomeResponse Interface
export interface GetIncomeResponse {
  id: string;
  _id: string;
  __v: number;
  user: string; // ObjectId referring to the User
  source: string;
  amount: number;
  date: string;
  createdAt: string;
  updatedAt: string;
}

// GetExpensesResponse Interface
export interface GetExpensesResponse {
  id: string;
  _id: string;
  __v: number;
  user: string; // ObjectId referring to the User
  category: string;
  amount: number;
  date: string;
  createdAt: string;
  updatedAt: string;
}

// GetBudgetResponse Interface
export interface GetBudgetResponse {
  id: string;
  _id: string;
  __v: number;
  user: string; // ObjectId referring to the User
  category: string;
  allocated_amount: number;
  spent_amount: number;
  createdAt: string;
  updatedAt: string;
}
