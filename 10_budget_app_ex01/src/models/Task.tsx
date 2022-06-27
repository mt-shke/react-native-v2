import {Realm} from '@realm/react';
import {UUID} from 'bson';

// On call la class pour le context
// Lorsque l'on doit générer une fonction en rapport avec la classe, on peut l'appeler en utilisant le nom de class
// Lorsque l'on doit effectuer un Crud simple, on peut directement utiliser le context via realm, n'importe où

export default class Task extends Realm.Object {
  _id!: 'uuid';
  description!: string;
  isComplete!: boolean;
  createdAt!: Date;

  static generate(description: string) {
    return {
      _id: new UUID(),
      description,
      createdAt: new Date(),
    };
  }

  static update(task: ITask) {
    return {
      ...task,
      _id: task._id,
      isComplete: true,
      description: 'Task is now complete',
    };
  }

  static schema = {
    name: 'Task',
    primaryKey: '_id',
    properties: {
      _id: 'uuid',
      description: 'string',
      isComplete: {type: 'bool', default: false},
      createdAt: 'date',
    },
  };
}

// filter

// obj = realm
//   .objects('user_details')
//   .filtered('user_id =' + this.state.input_user_id);

interface ITask {
  _id: UUID;
  description: string;
  isComplete: boolean;
  createdAt: Date;
}
