import Realm from 'realm';
import {createRealmContext} from '@realm.io/react';

export class Todo {
    static schema = {
        name: 'Todo',
        properties: {
            _id: 'objectId',
            _partition: 'string',
            text: 'string'
        },
        primaryKey: '_id',
    };

    constructor({name, partition, id = new Realm.BSON.ObjectId()}) {
        this._partition = partition;
        this._id = id;
        this.name = name;
    }
}

export const {RealmProvider, useRealm, useObject, useQuery} = createRealmContext({schema: [Todo.schema]});
// export {Todo};
