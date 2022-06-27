import {Realm} from '@realm/react';
import {TCategory} from '../ts/interfaces';
const {UUID} = Realm.BSON;

export default class Expense extends Realm.Object {
  _id_expense!: 'uuid';
  date!: Date;
  amount!: number;
  category!: TCategory;
  comments!: string;

  static schema = {
    name: 'Expense',
    primaryKey: '_id_expense',
    properties: {
      _id_expense: 'uuid',
      date: 'date',
      amount: 'int',
      category: 'string',
      comments: 'string',
    },
  };
}
