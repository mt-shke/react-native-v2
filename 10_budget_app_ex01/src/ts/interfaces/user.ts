import {TCategory} from '../types';

export interface IUser {
  user: IUserData;
}

export interface IUserData {
  _id: string;
  user: string;
  incomes: IPayment[];
  expenses: IPayment[];
}

export interface IPayment {
  firstname?: string;
  lastname?: string;
  category: TCategory;
  date: string;
  amount: number;
  comments: string;
  _id_income?: string;
  _id_expense?: string;
}

// For customContext - may delete

export interface IUserIncome {
  income: IUserIncomeData;
}

export interface IUserIncomeData {
  date: string;
  amount: string;
  category: TCategory;
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
