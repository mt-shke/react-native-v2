import {Realm} from '@realm/react';
import {TCategory, IPayment} from '../ts/interfaces';
const {UUID} = Realm.BSON;

export default class Income extends Realm.Object {
  _id_income?: 'uuid';
  date!: Date;
  amount!: number;
  category!: TCategory;
  comments!: string;

  static create(payment: IPayment) {
    return {
      _id_income: new UUID(),
      date: payment.date,
      amount: payment.amount,
      category: payment.category,
      comments: payment.comments ?? '',
    };
  }

  static schema = {
    name: 'Income',
    primaryKey: '_id_income',
    properties: {
      _id_income: 'uuid',
      date: 'date',
      amount: 'int',
      category: 'string',
      comments: {type: 'string', default: ''},
    },
  };
}
