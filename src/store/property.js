import {observable, computed} from 'mobx'
import moment from 'moment'
import uuid from 'node-uuid'

// ignore the two lines below, they just creates unique IDs for the todo
var _nextId = 0
function nextId(){ _nextId++; return _nextId }

// this is our domain model class
export class Property{
    // the ID of the current Todo
    // a unique id is automatically assigned when the todo object is instanced.
    //id = nextId()
    id = uuid();
    // the text of the todo; notice the "@observable" decorator.
    // The decorator, imported from mobx library in the first line,
    // will tell that this value is observable and computed values or observer
    // will be notified and updated when it changes.
    @observable text = 'none'

    userName = 'none'
    userKey  = null

    name = 'NoName'
    // Should be gunref
    //ownerGun = null;

    // @observable view = new  Map();
    // @observable reject = new  Map();
    // @observable like = new  Map();


    // is the todo done?
    @observable done = false

    @observable price = 0;
    @observable location = 'hk'
    // Type : sale, buy, rent, lease,
    @observable type = null
    @observable typeTo = 'typeTo'
    @observable typeBy = 'typeBy'
    @observable typeFor = 'typeFor'

    @observable isAgent = false
    @observable createdAt = moment().format();


    // computed values are values derived and automatically updated when the observed
    // observable values changes. For example we use it to determine whenever the todo is valid
    @computed get isValid(){
        // a text is required
        return this.text !== ''
    }

    // this two methods will serialize and deserialize the todo
    // to keep the example clean I have done them, but you should consider using
    // https://github.com/mobxjs/serializr
    serialize(){
        return {
            id: this.id,
            text: this.text,
            done: this.done,
            price : this.price,
            location : this.location,
            type: this.type,
            isAgent: this.isAgent,
            createdAt: this.createdAt,
            typeTo : this.typeTo,
            typeBy : this.typeBy,
            typeFor : this.typeFor,
            name : this.name
          }
    }

    static deserialize(json: Object){
        const property = new Property()
        //property.id = json['id'] || nextId()
        property.id = json['id'] || uuid()
        property.text = json['text'] || ''
        property.done = json['done'] || false
        property.price = json['price'] || 0
        property.location = json['location'] || ''
        property.type = json['type'] || ''
        property.isAgent = json['isAgent'] || false
        property.createdAt = json['createdAt'] || 0
        property.typeTo = json['typeTo'] || ''
        property.typeBy = json['typeBy'] || ''
        property.typeFor = json['typeFor'] || ''
        property.name = json['name'] || ''

        console.log( 'deserialize property.id ', property.id )
        return property
    }
}
