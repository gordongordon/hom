import {observable, computed} from 'mobx'
import moment from 'moment'
import uuid from 'node-uuid'

// ignore the two lines below, they just creates unique IDs for the todo
var _nextId = 0
function nextId(){ _nextId++; return _nextId }

// this is our domain model class
export class Testobject {
    // the ID of the current Todo
    // a unique id is automatically assigned when the todo object is instanced.
    //id = nextId()
    id = uuid();
    // the text of the todo; notice the "@observable" decorator.
    // The decorator, imported from mobx library in the first line,
    // will tell that this value is observable and computed values or observer
    // will be notified and updated when it changes.
    @observable text = 'none'


}
