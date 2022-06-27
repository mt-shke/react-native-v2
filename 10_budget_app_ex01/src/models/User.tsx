// import {Realm} from '@realm/react';
// import {UUID as UUIDType} from 'bson';
// const {UUID} = Realm.BSON;
// import {TCategory, IPayment} from '../ts/interfaces';
// import {IUser, IUserIncome} from '../ts/interfaces/user';
// // import {
// //   IUser,
// //   IUserExpenseData,
// //   IUserIncomeData,
// //   TUserIncome,
// // } from '../ts/interfaces/user';

// export default class User extends Realm.Object {
//   _id!: 'uuid';
//   user!: string;
//   // incomes!: IUserIncomeData[];
//   // expenses!: IUserExpenseData[];

//   static createNewUser({user}: any) {
//     return {
//       _id: new UUID(),
//       user: user.user,
//       incomes: user.incomes,
//       expenses: user.expenses,
//     };
//   }

//   // static schema = {
//   //   name: 'User',
//   //   primaryKey: '_id',
//   //   properties: {
//   //     _id: 'uuid',
//   //     user: 'string',
//   //     incomes: {type: 'list', objectType: 'Income'},
//   //     expenses: {type: 'list', objectType: 'Expense'},
//   //   },
//   // };

//   public static schema: Realm.ObjectSchema = {
//     name: 'User',
//     primaryKey: '_id',
//     properties: {
//       _id: 'uuid',
//       user: 'string',
//       incomes: "Income[]",
//       expenses:  "Expense[]",
//     }
//   };

// }

// export type TUserIncome = IUserIncomeData;

// export interface IUserIncomeData {
//   date: Date;
//
//   category: TCategory;
//   comments: string;
//   _id_income?: UUIDType;
// }

// export type TUserExpense = IUserIncomeData;

// export interface IUserExpenseData {
//   date: Date;
//
//   category: TCategory;
//   comments: string;
//   _id_expense?: UUIDType;
// }
