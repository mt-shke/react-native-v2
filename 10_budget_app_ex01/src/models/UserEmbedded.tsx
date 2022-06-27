import {Realm} from '@realm/react';
import {UUID as UUIDType} from 'bson';
const {UUID} = Realm.BSON;

export default class UserEmbedded extends Realm.Object {
  _id!: UUIDType;
  user!: string;
  books!: {type: 'list'; objectType: 'Book'};

  static createUser(name = 'unknow') {
    return {
      _id: new UUID(),
      user: name,
      books: [],
    };
  }

  static addBook({
    user,
    title,
    pages,
  }: {
    user: UserEmbedded;
    title: string;
    pages: number;
  }) {
    console.log(user._id);

    return {
      _id: user._id,
      user: user.user,
      books: [{title: title, pages: pages}],
    };
  }

  static schema: Realm.ObjectSchema = {
    name: 'UserEmbedded',
    primaryKey: '_id',
    properties: {
      _id: 'uuid',
      user: 'string',
      books: {type: 'list', objectType: 'Book'},
    },
  };
}

export class Book {
  title!: string;
  pages!: number;
  id_book!: UUIDType;

  static schema: Realm.ObjectSchema = {
    name: 'Book',
    embedded: true,
    properties: {
      id_book: 'uuid',
      title: 'string',
      pages: 'int',
    },
  };
}

// const BookSchema = {
//   name: 'Book',
//   embedded: true,
//   properties: {
//     _id_children: 'uuid',
//     title: 'string',
//     pages: 'int',
//   },
// };
