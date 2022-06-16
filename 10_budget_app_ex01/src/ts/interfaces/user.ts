import {CategoryType} from './payment';

export interface IUser {
  user: IUserData;
}

export interface IUserData {
  _id: string;
  user: string;
  incomes: IUserIncomeData[];
  expenses: IUserExpenseData[];
}

export interface IUserIncome {
  income: IUserIncomeData;
}

export interface IUserIncomeData {
  date: string;
  amount: string;
  category: CategoryType;
  comments: string;
  _id_income?: string;
}

export interface IUserExpense {
  expense: IUserExpenseData;
}

export interface IUserExpenseData {
  date: string;
  amount: string;
  category: string;
  comments: string;
  _id_expense: string;
}
