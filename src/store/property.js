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

//    name = 'NoName'
    // Should be gunref
    //ownerGun = null;

    // @observable view = new  Map();
    // @observable reject = new  Map();
    // @observable like = new  Map();


    // is the todo done?
    @observable done = false

    // Propety information
    @observable district = "";
    @observable nameOfBuilding = "";
    @observable propertyType = "";
    @observable flatType =  "";
    @observable nearByMtrLine = "";
    @observable nearByMtrStop = "";

    @observable numOfDayClosingDeal = 0;
    // leasingnumOfDayClosingDeal
    @observable leasePrice = 0;
    @observable leasePriceWithTax = true;
    @observable leasePriceWithLandTax = true;
    @observable leasePriceWithManagementFee = true;
    @observable leaseDepositPerMonth = 0;


    @observable rentBudgetMin = 0;
    @observable rentBudgetMax = 0;

    // sale pricing
    @observable salePrice = 0;
    @observable salePriceMin = 0;
    @observable salePriceMax = 0;
    @observable buyBudgetMin = 0;
    @observable buyBudgetMin = 0;

    // property sizing
    @observable netSize = 0;
    @observable netSizeMin = 0;
    @observable netSizeMax = 0;
    @observable numOfRroom = 0;
    @observable numOfBathroom = 0;
    @observable numOfLivingroom = 0;
    // Contact
    @observable contactName = "no name";
    @observable contactPhone = "missing phone";
    @observable contactEmail = "missing email";
    // Type : sale, buy, rent, lease,
    @observable type = null
    @observable typeTo = 'typeTo'
    @observable typeBy = 'typeBy'
    @observable typeFor = 'typeFor'

    @observable isAgent = false
    @observable createdAt = moment().format();

    // Lease property
    @observable isNegotiable = true
    @observable isViewAble = true
    @observable hasHomeHardware = false

    @observable isPreferPayAnnually = false
    @observable isSaleWithLease = false
    @observable jobNature = 0;

    @observable isViewAbleNow = false
    @observable isRentAbleNow = false
    @observable isFreeForSevenDay = false
    @observable dueDay = undefine

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
//            text: this.text,
            done: this.done,
//            location : this.location,
            type: this.type,

            isAgent: this.isAgent,
            createdAt: this.createdAt,
            typeTo : this.typeTo,
            typeBy : this.typeBy,
            typeFor : this.typeFor,

            district : this.district,
            nameOfBuilding: this.nameOfBuilding,
            propertyType : this.propertyType,
            flatType : this.flatType,
            nearByMtrLine : this.nearByMtrLine,
            nearByMtrStop : this.nearByMtrStop,


            salePrice : this.salePrice,
            salePriceMin : this.salePriceMin,
            salePriceMax : this.salePriceMax,
            leasePrice : this.leasePrice,
            leasePriceWithTax : this.leasePriceWithTax,
            leasePriceWithLandTax : this.leasePriceWithLandTax,
            leasePriceWithManagementFee : this.leasePriceWithManagementFee,
            leaseDepositPerMonth : this.leaseDepositPerMonth,

            netSize : this.netSize,
            netSizeMin : this.netSizeMin,
            netSizeMax : this.netSizeMax,
            numOfRoom : this.numOfRoom,
            numOfBathroom : this.numOfBathroom,
            numOfLivingroom : this.numOfLivingroom,

            contactName : this.contactName,
            contactPhone : this.contactPhone,
            contactEmail : this.contactEmail,

            // Sale Property
            numOfDayClosingDeal : this.numOfDayClosingDeal,
            isNegotiable : this.isNegotiable,
            isViewAble : this.isViewAble,
            isSaleWithLease : this.isSaleWithLease,

            // lease property
            isNegotiable  : this.isNegotiable,
            isViewAble    : this.isViewAble,
            isPreferPayAnnually : this.isPreferPayAnnually,
            hasHomeHardware : this.hasHomeHardware,
            jobNature : this.jobNature,

            isViewAbleNow : this.isViewAbleNow,
            isRentAbleNow : this.isRentAbleNow,
            isFreeForSevenDay : this.isFreeForSevenDay,
            dueDay : this.dueDay,

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
