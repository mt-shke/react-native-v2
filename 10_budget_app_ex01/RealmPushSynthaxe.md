```js
const onSubmit = (data: {
  beneficiary: string,
  amount: string,
  date: Date,
  comment: string,
  operationType: DropDownItemType | undefined,
  operationCategory: DropDownItemType | undefined,
}) => {
  console.log(data);

  if (data.operationType != undefined && data.operationCategory != undefined) {
    let op: Operation;

    if (data.operationType.value === 'income') {
      op = {
        date: data.date.toDateString(),
        amount: data.amount,
        category: data.operationCategory.value,
        comments: data.comment,
        _id_income: new UUID().toHexString(),
      };

      realm.write(() => {
        user?.incomes.push(op);
      });
    } else {
      op = {
        date: data.date.toDateString(),
        amount: data.amount,
        category: data.operationCategory.value,
        comments: data.comment,
        _id_expense: new UUID().toHexString(),
      };

      realm.write(() => {
        user?.expenses.push(op);
      });
    }

    //console.log(new UUID().toHexString());
    reload();
  }
};
```

```js
import {createRealmContext} from '@realm/react';

export const SchemaName: string = 'User';

const UserSchema = {
  name: SchemaName,
  properties: {
    _id: 'string',
    user: 'string',
    incomes: 'Operation[]',
    expenses: 'Operation[]',
  },
  primaryKey: '_id',
};

const OperationSchema = {
  name: 'Operation',
  embedded: true,
  properties: {
    date: 'string',
    amount: 'string',
    category: 'string',
    comments: 'string',
    _id_income: 'string?',
    _id_expense: 'string?',
  },
};

const config = {
  schema: [UserSchema, OperationSchema],
};

export default createRealmContext(config);
```
