import {Realm} from '@realm/react';
import {UUID as UUIDType} from 'bson';
const {UUID} = Realm.BSON;

export default class UserLinked extends Realm.Object {
  _id!: 'uuid';
  user!: string;
  children!: Realm.List<Children>;

  static createUser(name = 'unknow') {
    return {
      _id: new UUID(),
      user: name,
      children: [],
    };
  }

  public static schema: Realm.ObjectSchema = {
    name: 'UserLinked',
    primaryKey: '_id',
    properties: {
      _id: 'uuid',
      user: 'string',
      children: 'Children[]',
    },
  };
}

export class Children {
  _id_children!: UUIDType;
  text!: string;
  age!: number;
  assignee!: Realm.Results<UserLinked>;

  static schema: Realm.ObjectSchema = {
    name: 'Children',
    primaryKey: '_id_children',
    properties: {
      _id_children: 'uuid',
      text: 'string',
      age: 'int',
      assignee: {
        type: 'linkingObjects',
        objectType: 'UserLinked',
        property: 'children',
      },
    },
  };
}
