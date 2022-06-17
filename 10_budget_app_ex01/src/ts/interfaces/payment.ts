export interface IPayment {
  firstname: string;
  lastname?: string;
  amount: number;
  category: CategoryType;
  date: string;
  comments: string;
  _id_income?: string;
  _id_expense?: string;
}

export interface IPayment {
  firstname: string;
  lastname?: string;
  amount: number;
  category: CategoryType;
  date: string;
  comments: string;
  _id_income?: string;
  _id_expense?: string;
}

export type CategoryType =
  | 'Salaire et assimilié'
  | 'Revenu financier'
  | 'Rente'
  | 'Pension alimentaire'
  | 'Allocation chômage'
  | 'Prestations sociales'
  | 'Revenu foncier'
  | 'Revenu exceptionnel'
  | 'Autre revenu'
  | 'Alimentaire'
  | 'Factures'
  | 'Transport'
  | 'Logement'
  | 'Santé'
  | 'Divertissement'
  | 'Vacances'
  | 'Shopping';

export type IncomeType =
  | 'Salaire et assimilié'
  | 'Revenu financier'
  | 'Rente'
  | 'Pension alimentaire'
  | 'Allocation chômage'
  | 'Prestations sociales'
  | 'Revenu foncier'
  | 'Revenu exceptionnel'
  | 'Autre revenu';

export type ExpenseType =
  | 'Alimentaire'
  | 'Factures'
  | 'Transport'
  | 'Logement'
  | 'Santé'
  | 'Divertissement'
  | 'Vacances'
  | 'Shopping';
