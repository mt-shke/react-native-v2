import {
  IUserData,
  IUserExpenseData,
  IUserIncomeData,
} from '../ts/interfaces/user';

// User Types
export type UserActionsType =
  | 'LOGIN'
  | 'LOGOUT'
  | 'UPDATE'
  | 'SET_RANDOM_USER'
  | 'USER_ADD_INCOME'
  | 'USER_ADD_EXPENSE';

// User State
export type UserState = {
  _id: string;
  user: string;
  incomes: IUserIncomeData[];
  expenses: IUserExpenseData[];
};

//  Actions-Types
export type UserSetRandomUserAction = {
  type: 'SET_RANDOM_USER';
};

export type UserLoginAction = {
  type: 'LOGIN';
  payload: {
    user: IUserData;
  };
};

export type UserLogoutAction = {
  type: 'LOGOUT';
};

export type UserUpdateAction = {
  type: 'UPDATE';
  payload: {
    incomes?: IUserIncomeData;
    expenses?: IUserExpenseData;
  };
};

export type UserAddIncomeAction = {
  type: 'USER_ADD_INCOME';
  payload: {
    income: IUserIncomeData;
  };
};

export type UserAddExpenseAction = {
  type: 'USER_ADD_EXPENSE';
  payload: {
    expense: IUserExpenseData;
  };
};

// User Action Types
export type UserActions =
  | UserLoginAction
  | UserUpdateAction
  | UserLogoutAction
  | UserSetRandomUserAction
  | UserAddExpenseAction
  | UserAddIncomeAction;
