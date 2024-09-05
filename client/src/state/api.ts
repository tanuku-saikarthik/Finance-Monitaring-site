import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetUserProfileResponse,
  GetSavingsResponse,
  GetLiabilitiesResponse,
  GetInvestmentsResponse,
  GetIncomeResponse,
  GetExpensesResponse,
  GetBudgetResponse,
} from "./types";

// API instance with axios
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// Auth functions using axios
export const register = (data: { email: string; password: string }) => api.post('/auth/register', data);
export const login = (data: { email: string; password: string }) => api.post('/auth/login', data);

// RTK Query API definition
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["UserProfile", "Savings", "Liabilities", "Investments", "Income", "Expenses", "Budget"],
  endpoints: (build) => ({
    getUserProfile: build.query<GetUserProfileResponse, void>({
      query: () => "user/profile/",
      providesTags: ["UserProfile"],
    }),
    getSavings: build.query<Array<GetSavingsResponse>, void>({
      query: () => "savings/",
      providesTags: ["Savings"],
    }),
    getLiabilities: build.query<Array<GetLiabilitiesResponse>, void>({
      query: () => "liabilities/",
      providesTags: ["Liabilities"],
    }),
    getInvestments: build.query<Array<GetInvestmentsResponse>, void>({
      query: () => "investments/",
      providesTags: ["Investments"],
    }),
    getIncome: build.query<Array<GetIncomeResponse>, void>({
      query: () => "income/",
      providesTags: ["Income"],
    }),
    getExpenses: build.query<Array<GetExpensesResponse>, void>({
      query: () => "expenses/",
      providesTags: ["Expenses"],
    }),
    getBudget: build.query<Array<GetBudgetResponse>, void>({
      query: () => "budget/",
      providesTags: ["Budget"],
    }),
  }),
});

export default apiSlice;
