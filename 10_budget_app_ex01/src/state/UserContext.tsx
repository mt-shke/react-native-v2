import React, {createContext, ReactNode, useReducer} from 'react';
import {IUserData} from '../ts/interfaces/user';
import {getRandomId, getRandomUserData} from '../utils';
import {UserActions} from './ActionsTypes';

const initialState: IUserData = {
  _id: '',
  user: '',
  incomes: [],
  expenses: [],
};

// CreateContext
export const UserContext = createContext<{
  state: typeof initialState;
  dispatch: React.Dispatch<UserActions>;
}>({
  state: initialState,
  dispatch: () => {},
});

// Reducer
const reducer = (state: typeof initialState, action: UserActions) => {
  switch (action.type) {
    case 'SET_RANDOM_USER':
      const randomUser = getRandomUserData();
      return {
        ...state,
        _id: randomUser._id,
        user: randomUser.user,
        incomes: randomUser.incomes,
        expenses: randomUser.expenses,
      };

    case 'LOGIN':
      const loggedUser = {_id: '', user: '', incomes: [], expenses: []};
      return {
        ...loggedUser,
      };

    case 'USER_ADD_INCOME':
      const newIncomeId = getRandomId();
      const newIncome = {
        ...action.payload.income,
        amount: action.payload.income.amount.toString(),
        _id_expense: newIncomeId,
      };
      return {
        ...state,
        incomes: [...state.incomes, newIncome],
      };

    case 'USER_ADD_EXPENSE':
      const newExpenseId = getRandomId();
      const newExpense = {
        ...action.payload.expense,
        amount: action.payload.expense.amount.toString(),
        _id_expense: newExpenseId,
      };
      return {
        ...state,
        incomes: [...state.incomes, newExpense],
      };

    case 'UPDATE':
      return {
        ...state,
      };
    default:
      return state;
  }
};

// Provider
interface IUserProviderProps {
  children: ReactNode;
}

const UserProvider = ({children}: IUserProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
