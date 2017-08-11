import {observable, computed} from 'mobx'
import moment from 'moment'
import uuid from 'node-uuid'

// ignore the two lines below, they just creates unique IDs for the todo
var _nextId = 0
function nextId(){ _nextId++; return _nextId }

const LABEL_JOBNATURE = {
 '0' : '私人企業',
 '1' : '政府工',
 '2' : '自僱人士',
 '3' : '學生',
 '4' : '海外人士',
}

// this is our domain model class
export class Property{

    // constructor( v ){
    // restore( v )
    // }

    // the ID of the current Todo
    // a unique id is automatically assigned when the todo object is instanced.
    //id = nextId()
    id = uuid();
    uid = undefined;
    fbid = undefined;  // firebase id
    relatedFbid = null; // this property related to this fbid;
    // the text of the todo; notice the "@observable" decorator.
    // The decorator, imported from mobx library in the first line,
    // will tell that this value is observable and computed values or observer
    // will be notified and updated when it changes.
    text = 'none'

    userName = 'none'
    userKey  = null
    // roleName = 'none'

    // name = 'NoName'
    // Should be gunref
    // ownerGun = null;

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
    @observable buyBudgetMax = 0;

    // property sizing
    @observable netSize = 0;
    @observable netSizeMin = 0;
    @observable netSizeMax = 0;
    @observable numOfRoom = 0;
    @observable numOfBathroom = 1;  // Default minimum 1 bath room
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
    //@observable createdAt = moment().format();
//    @observable createdAt = moment().utc().format('YYYY-MM-DD HH:mm:ss').utcOffset(9);
    // make sure it working in different time zone
    @observable createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
    @observable realTime  = moment().format('YYYY-MM-DD HH:mm:ss');


    // Lease property
    @observable isNegotiable = true
    @observable isViewAble = true
    @observable hasHomeHardware = false
    //
    @observable isPreferPayAnnually = false
    @observable isSaleWithLease = false
    @observable jobNature = 0;
    //
    @observable isViewAbleNow = false
    @observable isRentAbleNow = false
    @observable isFreeForSevenDay = false
    @observable dueDay = null
    @observable earlyTimeToView = moment().format();

    @observable numOfPeopleLiving = 1
    @observable income = 0
    @observable isBuyWithLease = false

    // @computed get getnetSize () {
    //    return this.netSize;
    //  }

    // computed values are values derived and automatically updated when the observed
    // observable values changes. For example we use it to determine whenever the todo is valid
    @computed get isValid(){
        // a text is required
        return this.text !== ''
    }

    @computed get howFresh() {
      const start = moment( this.createdAt )
      const end   = moment( this.realTime);
      const sDiff =  end.diff( start, 'seconds');
      const mDiff =  end.diff( start, 'minutes');
      const hDiff =  end.diff( start, 'hours');
      const DDiff =  end.diff( start, 'days');

      if ( DDiff > 7)
      {
        return ''
      }
      if ( DDiff > 0)
      {
         return '好新鮮'
      }
      if ( hDiff > 0)
      {
        return '勁新鮮'
      }
      if ( mDiff > 0)
      {
        return '超新鮮'
      }
      if ( sDiff > 0)
      {
        return '超新鮮'
      }

      return '超新鮮';
    }

    @computed get colorByFresh() {

     var color = '#0B610B';

     switch( this.howFresh ) {
       case '超新鮮' :  color = '#0B610B';
       break;
       case '勁好新鮮' : color = '#298A08';
       break;
       case '好新鮮' : color = '#04B404';
       break;
       case '新鮮' : color = '#01DF3A';
       break;
     }

     return color;
    }


    @computed get dayListed() {

         const start = moment( this.createdAt )
         const end   = moment( this.realTime);
         const sDiff =  end.diff( start, 'seconds');
         const mDiff =  end.diff( start, 'minutes');
         const hDiff =  end.diff( start, 'hours');
         const DDiff =  end.diff( start, 'days');
         // Set default value, incase of new insert property, without and delate!
         var answer = '0 秒前'

         if ( DDiff > 0)
         {
           return answer = DDiff + '日前'
         }
         if ( hDiff > 0)
         {
           return answer = hDiff + '小時前'
         }
         if ( mDiff > 0)
         {
           return answer = mDiff + '分鐘前'
         }
         if ( sDiff > 0)
         {
           return answer = sDiff + '秒前'
         }

         return answer;
    }

    @computed get jobNatureLabel() {
        return '職業' + LABEL_JOBNATURE[this.jobNature] + '/';
    }

    @computed get incomeLabel() {
      var label = this.priceToLabel( this.income );

      return '收入' + label + '/';
    }

    priceToLabel( price ) {
      var label = '';
      const tenThousandDigit = parseInt((price / 10000));
      const thousandDigit = parseInt( (price % 10000) / 1000) ;
      const hundredDigit = parseInt( (price % 1000) / 100 );

      if ( tenThousandDigit >= 1 ) {
        label += tenThousandDigit + '萬';
      }
      if ( thousandDigit >= 1 ) {
        label += thousandDigit + '千';
      }
      if ( hundredDigit >= 1 ) {
        label += hundredDigit + '百';
      }

      return label;
    }

    getTimeInNum( time ) {
      const MM = moment( time )
      const Y = MM.get('Y') ;
      const M = MM.get('M') // 0 to 11
      const D = MM.get('D');
      const h = MM.get('h') ;
      const m = MM.get('m');
      const s = MM.get('s');

      const Days = D;
      const Hours = Days * 24;
      const Seconds = Hours * 60;
      const Months = M + 1;
      const Years = Y;
      return { Days, Hours, Seconds, Months, Years }
    }

    @computed get dueDayLabel() {
      const time = this.getTimeInNum( this.dueDay )
      return time.Months + '月' + time.Days + '日交吉/' ;
    }

    @computed get rentBudgetMaxLabel() {

      if ( this.rentBudgetMax > 0 )
      {
         return  '租金預算' + this.priceToLabel( this.rentBudgetMax ) + '/';
      }
      return '';
    }

    @computed get numOfPeopleLivingLabel() {
      return this.numOfPeopleLiving + '人住/';
    }

    @computed get colorByRoleName() {
      var color = '#088A4B';

     switch( this.typeTo ) {
       case 'buy' :  color = '#FF8000';
       break;
       case 'lease' : color = '#FF0000';
       break;
       case 'sale' : color = '#4000FF';
       break;
       case 'rent' : color = '#0080FF';
       break;
     }

     if ( this.relatedFbid != null ) {
       color = '#888888'
     }

     return color;
    }

    @computed get roleName(){
        var name = 'none';

       switch( this.typeTo ) {
         case 'buy' :  name = '買家';
         break;
         case 'lease' : name = "業主 出租";
         break;
         case 'sale' : name = "業主 出售";
         break;
         case 'rent' : name = "租客";
         break;
       }

       if ( this.relatedFbid != null ) {
         name = '地產代理'
       }

       return name;
    }

    @computed get contactNameLabel() {
        return this.roleName + this.contactName;
    }

    @computed get numOfRoomLabel() {

       switch( this.numOfRoom ) {
         case 0 : return '開放式';
         case 1 : return '1房';
         case 2 : return '2房';
         case 3 : return '3房';
         case 4 : return '4房';
         case 5 : return '5房';
       }
       return 'x房'
    }

    @computed get partitionLabel() {
      return "間隔" + this.numOfRoomLabel + this.numOfLivingroomLabel + this.numOfBathroomLabel + '/';
    }
    @computed get numOfLivingroomLabel() {

       switch( this.numOfRoom ) {
         case 0 : return '';
         case 1 : return '1廳';
         case 2 : return '2廳';
         case 3 : return '3廳';
       }
       return 'x廳'
    }

    @computed get numOfBathroomLabel() {

       switch( this.numOfRoom ) {
         case 0 : return '';
         case 1 : return '1廁';
         case 2 : return '2廁';
         case 3 : return '3廁';
         case 4 : return '4廁';
         case 5 : return '5廁';
         case 6 : return '6廁';
       }
       return 'x廁'
    }

    @computed get hasHomeHardwareLabel() {
      if ( this.hasHomeHardware ) {
         return '有傢俬/'
      }

      return ''
    }

    @computed get leasePriceLabel() {
      return "租金" + this.priceToLabel( this.leasePrice ) + '/';
    }

    @computed get isFreeForSevenDayLabel() {
      if ( this.isFreeForSevenDay ) {
        return '有免租期/'
      }
      return  ''
    }

    // setNetSize( netSize ) {
    //   this.netSize = netSize;
    // }
    // // this two methods will serialize and deserialize the todo
    // to keep the example clean I have done them, but you should consider using
    //https://github.com/mobxjs/serializr
    serialize(){
        debugger
        return {
            id: this.id,
            uid: this.uid,
            fbid: this.fbid,
            relatedFbid : this.relatedFbid,
//            text: this.text,
            done: this.done,
//            location : this.location,
            type: this.type,


            isAgent: this.isAgent,
            createdAt: this.createdAt,
            reatlTime : this.realTime,
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
            rentBudgetMax : this.rentBudgetMax,
            buyBudgetMax : this.buyBudgetMax,


            netSize : this.netSize,
            netSizeMin : this.netSizeMin,
            netSizeMax : this.netSizeMax,
            numOfRoom : this.numOfRoom,
            numOfBathroom : this.numOfBathroom,
            numOfLivingroom : this.numOfLivingroom,
            numOfPeopleLiving : this.numOfPeopleLiving,
            contactName : this.contactName,
            contactPhone : this.contactPhone,
            contactEmail : this.contactEmail,

            // Sale Property
            numOfDayClosingDeal : this.numOfDayClosingDeal,
//            isNegotiable : this.isNegotiable,
//            isViewAble : this.isViewAble,
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
            // dueDay : this.dueDay.toJSON(),
            // earlyTimeToView : this.earlyTimeToView.toJSON(),
            dueDay : this.dueDay,
            earlyTimeToView : this.earlyTimeToView,
            income : this.income,
            isBuyWithLease : this.isBuyWithLease,
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

    static deserializeObj( v, p ){
//      const p = new Property();

      p.id =  v.id,
      p.uid = v.uid,
      p.fbid = v.fbid,
      p.relatedFbid  = v.relatedFbid,
//            text: this.text,
      p.done = v.done,
//            location : this.location,
      p.type = v.type,

      p.isAgent= v.isAgent,
      p.createdAt= v.createdAt,
      p.realTime = v.realTime,
      //p.createdAt = moment(v.createdAt).format('YYYY-MM-DD HH:mm:ss');
      p.typeTo = v.typeTo,
      p.typeBy = v.typeBy,
      p.typeFor = v.typeFor,

      p.district = v.district,
      p.nameOfBuilding= v.nameOfBuilding,
      p.propertyType = v.propertyType,
      p.flatType = v.flatType,
      p.nearByMtrLine = v.nearByMtrLine,
      p.nearByMtrStop = v.nearByMtrStop,


      p.salePrice = v.salePrice,
      p.salePriceMin = v.salePriceMin,
      p.salePriceMax = v.salePriceMax,
      p.leasePrice = v.leasePrice,
      p.leasePriceWithTax = v.leasePriceWithTax,
      p.leasePriceWithLandTax =v.leasePriceWithLandTax,
      p.leasePriceWithManagementFee = v.leasePriceWithManagementFee,
      p.leaseDepositPerMonth = v.leaseDepositPerMonth,
      p.rentBudgetMax = v.rentBudgetMax,
      p.buyBudgetMax = v.buyBudgetMax,


      p.netSize = v.netSize,
      p.netSizeMin = v.netSizeMin,
      p.netSizeMax = v.netSizeMax,
      p.numOfRoom = v.numOfRoom,
      p.numOfBathroom = v.numOfBathroom,
      p.numOfLivingroom = v.numOfLivingroom,
      p.numOfPeopleLiving = v.numOfPeopleLiving,
      p.contactName = v.contactName,
      p.contactPhone = v.contactPhone,
      p.contactEmail = v.contactEmail,

      // Sale Property
      p.numOfDayClosingDeal = v.numOfDayClosingDeal,
//            isNegotiable : v.isNegotiable,
//            isViewAble : v.isViewAble,
      p.isSaleWithLease = v.isSaleWithLease,

      // lease property
      p.isNegotiable  = v.isNegotiable,
    p.isViewAble    = v.isViewAble,
      p.isPreferPayAnnually = v.isPreferPayAnnually,
      p.hasHomeHardware = v.hasHomeHardware,
      p.jobNature = v.jobNature,

      p.isViewAbleNow = v.isViewAbleNow,
      p.isRentAbleNow = v.isRentAbleNow,
      p.isFreeForSevenDay = v.isFreeForSevenDay,
//            dueDay : this.dueDay.toJSON(),
      //earlyTimeToView : this.earlyTimeToView.toJSON(),
      p.dueDay = v.dueDay,
      p.earlyTimeToView = v.earlyTimeToView,
      p.income = v.income,
      p.isBuyWithLease = v.isBuyWithLease

      return p;
    }


    restore( v ) {

      this.id =  v.id,
      this.uid = v.uid,
      this.fbid = v.fbid,
      this.relatedFbid  = v.relatedFbid,
//            text: this.text,
      this.done = v.done,
//            location : this.location,
      this.type = v.type,

      this.isAgent= v.isAgent,
      this.createdAt= v.createdAt,
      //this.createdAt = moment(v.createdAt).format('YYYY-MM-DD HH:mm:ss');
      this.typeTo = v.typeTo,
      this.typeBy = v.typeBy,
      this.typeFor = v.typeFor,

      this.district = v.district,
      this.nameOfBuilding= v.nameOfBuilding,
      this.propertyType = v.propertyType,
      this.flatType = v.flatType,
      this.nearByMtrLine = v.nearByMtrLine,
      this.nearByMtrStop = v.nearByMtrStop,


      this.salePrice = v.salePrice,
      this.salePriceMin = v.salePriceMin,
      this.salePriceMax = v.salePriceMax,
      this.leasePrice = v.leasePrice,
      this.leasePriceWithTax = v.leasePriceWithTax,
      this.leasePriceWithLandTax =v.leasePriceWithLandTax,
      this.leasePriceWithManagementFee = v.leasePriceWithManagementFee,
      this.leaseDepositPerMonth = v.leaseDepositPerMonth,
      this.rentBudgetMax = v.rentBudgetMax,
      this.buyBudgetMax = v.buyBudgetMax,


      this.netSize = v.netSize,
      this.netSizeMin = v.netSizeMin,
      this.netSizeMax = v.netSizeMax,
      this.numOfRoom = v.numOfRoom,
      this.numOfBathroom = v.numOfBathroom,
      this.numOfLivingroom = v.numOfLivingroom,
      this.numOfPeopleLiving = v.numOfPeopleLiving,
      this.contactName = v.contactName,
      this.contactPhone = v.contactPhone,
      this.contactEmail = v.contactEmail,

      // Sale Property
      this.numOfDayClosingDeal = v.numOfDayClosingDeal,
//            isNegotiable : v.isNegotiable,
//            isViewAble : v.isViewAble,
      this.isSaleWithLease = v.isSaleWithLease,

      // lease property
      this.isNegotiable  = v.isNegotiable,
    this.isViewAble    = v.isViewAble,
      this.isPreferPayAnnually = v.isPreferPayAnnually,
      this.hasHomeHardware = v.hasHomeHardware,
      this.jobNature = v.jobNature,

      this.isViewAbleNow = v.isViewAbleNow,
      this.isRentAbleNow = v.isRentAbleNow,
      this.isFreeForSevenDay = v.isFreeForSevenDay,
//            dueDay : this.dueDay.toJSON(),
      //earlyTimeToView : this.earlyTimeToView.toJSON(),
      this.dueDay = v.dueDay,
      this.earlyTimeToView = v.earlyTimeToView,
      this.income = v.income,
      this.isBuyWithLease = v.isBuyWithLease
    }
}
