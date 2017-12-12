import { useStrict, observable, computed, action } from "mobx";
import moment from "moment";
import uuidv1 from "uuid/v1";
import { DISTRICK } from "DISTRICK";
import { LEVEL } from "LEVEL";


//You can force your app to only modify state through actions by using 
//useStrict(true);

// ignore the two lines below, they just creates unique IDs for the todo
// var _nextId = 0
// function nextId(){ _nextId++; return _nextId }

const LABEL_JOBNATURE = {
  "0": "私人企業",
  "1": "政府工",
  "2": "自僱人士",
  "3": "學生",
  "4": "海外人士"
};



// this is our domain model class
export class Property {

  constructor() {
    this.nameOfBuilding = "MOS0001";
  }

  
  isTypeBy = type => this.typeBy === type;
  
  // ** Every time add a new variable
  // make sure also handle in serialize, restore, deserialize, otherwise error

  // constructor( v ){
  // restore( v )
  // }

  // the ID of the current Todo
  // a unique id is automatically assigned when the todo object is instanced.
  //id = nextId()
  id = uuidv1();
  uid = undefined;
  fbid = undefined; // firebase id
  relatedFbid = null; // this property related to this fbid;
  // the text of the todo; notice the "@observable" decorator.
  // The decorator, imported from mobx library in the first line,
  // will tell that this value is observable and computed values or observer

  // will be notified and updated when it change
  text = "none";

  userName = "none";
  userKey = null;
  // roleName = 'none'

  // name = 'NoName'
  // Should be gunref
  // ownerGun = null;

  // @observable view = new  Map();
  // @observable reject = new  Map();
  // @observable like = new  Map();

  orderByChild = "nameOfBuilding";
  // equalTo = this.nameOfBuilding;

  @computed
  get equalTo() {
    switch (this.orderByChild) {
      case "nameOfBuilding":
        return this.nameOfBuilding;
      case "addressLocation":
        return this.addressLocation;
    }

    return this.nameOfBuilding;
  }
  // is the todo done?
  @observable done = false;

  // Propety information
  @observable district = "";
  @observable addressRegion = "";
  @observable addressLocation = "";
  @observable nameOfBuilding = "";
  @observable propertyType = "";
  @observable flatType = "";
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
  @observable numOfBathroom = 1; // Default minimum 1 bath room
  @observable numOfLivingroom = 0;
  // Contact
  @observable contactName = "no name";
  @observable contactPhone = "missing phone";
  @observable contactEmail = "missing email";
  // Type : sale, buy, rent, lease,
  @observable type = null;
  @observable typeTo = "typeTo";
  // either : open or engage in this moment
  // default is open
  @observable typeBy = "open"; 
  @observable typeFor = "typeFor";

  @observable isAgent = false;
  //@observable createdAt = moment().format();
  //    @observable createdAt = moment().utc().format('YYYY-MM-DD HH:mm:ss').utcOffset(9);
  // make sure it working in different time zone
  @observable createdAt = moment().format("YYYY-MM-DD HH:mm:ss");
  @observable realTime = moment().format("YYYY-MM-DD HH:mm:ss");

  // Lease property
  @observable isNegotiable = false;
  @observable isViewAble = true;
  @observable hasHomeHardware = false;
  //
  @observable isPreferPayAnnually = false;
  @observable isSaleWithLease = false;
  @observable jobNature = 0;
  //
  @observable isViewAbleNow = false;
  @observable isRentAbleNow = false;
  @observable isFreeForSevenDay = false;
  @observable dueDay = null;
  @observable earlyTimeToView = moment().format();

  @observable numOfPeopleLiving = 1;
  @observable income = 0;
  @observable isBuyWithLease = false;
  
  @observable level = '0'; // 0 lower, 1 middle, 2 high
  @observable isPetAllowed = false; // boolean 
  @observable leasingPeriod = 12;

  // @computed get getnetSize () {
  //    return this.netSize;
  //  }

  // computed values are values derived and automatically updated when the observed
  // observable values changes. For example we use it to determine whenever the todo is valid
  @computed
  get isValid() {
    // a text is required
    return this.text !== "";
  }

  @action
  setTimeStamp() {
    const t = moment().format("YYYY-MM-DD HH:mm:ss");
    this.realTime = moment(t);
  }

  @computed
  get howFresh() {
    const start = moment(this.createdAt);
    const end = moment(this.realTime);
    const sDiff = end.diff(start, "seconds");
    const mDiff = end.diff(start, "minutes");
    const hDiff = end.diff(start, "hours");
    const DDiff = end.diff(start, "days");

    if (DDiff > 7) {
      return "";
    }
    if (DDiff > 0) {
      return "好新鮮";
    }
    if (hDiff > 0) {
      // within 24 hours
      return "勁新鮮";
    }
    if (mDiff > 0) {
      // within 60 minutes
      return "超新鮮";
    }
    if (sDiff > 0) {
      // within 1 minutes
      return "超新鮮";
    }

    return "超新鮮";
  }

  @computed
  get colorByFresh() {
    var color = "#0B610B";

    switch (this.howFresh) {
      case "超新鮮":
        color = "#0B610B";
        break;
      case "勁好新鮮":
        color = "#298A08";
        break;
      case "好新鮮":
        color = "#04B404";
        break;
      case "新鮮":
        color = "#01DF3A";
        break;
    }

    return color;
  }

 @computed get levelToArray(){
   return [String(this.level)]
 }

 @computed get addressToArray() {
  const region = this.addressRegion;
  const location = this.addressLocation;
  const building = this.nameOfBuilding;
  return [region, location, building];
 }

 @computed
 get addressLocationLabel() {
   // debugger
   const region = DISTRICK.find(element => element.value === this.addressRegion);
   // console.log( 'region', region)
   if (region === undefined) {
     return "region doesn't exist!";
   }
   const location = region.children.find(
     element => element.value === this.addressLocation
   );

   if (location === undefined) {
     return "location doesn't exist!";
   }
   return location.label;
 }



  @computed
  get nameOfBuildingLabel() {
    // debugger
    const region = DISTRICK.find(element => element.value === this.addressRegion);
    // console.log( 'region', region)
    if (region === undefined) {
      return "region doesn't exist!";
    }
    const location = region.children.find(
      element => element.value === this.addressLocation
    );
    if (location === undefined) {
      return "location doesn't exist!";
    }
    // console.log( 'location', location )
    const building = location.children.find(
      element => element.value === this.nameOfBuilding
    );
    return building.label;
  }

  @computed
  get dayListed() {
    const start = moment(this.createdAt);
    const end = moment(this.realTime);
    const sDiff = end.diff(start, "seconds");
    const mDiff = end.diff(start, "minutes");
    const hDiff = end.diff(start, "hours");
    const DDiff = end.diff(start, "days");
    // Set default value, incase of new insert property, without and delate!
    var answer = "0 秒前";

    if (DDiff > 0) {
      return (answer = DDiff + "日前");
    }
    if (hDiff > 0) {
      return (answer = hDiff + "小時前");
    }
    if (mDiff > 0) {
      return (answer = mDiff + "分鐘前");
    }
    if (sDiff > 0) {
      return (answer = sDiff + "秒前");
    }

    return answer;
  }

  @computed
  get jobNatureLabel() {
    return "職業" + LABEL_JOBNATURE[this.jobNature] + "/";
  }

  @computed
  get incomeLabel() {
    var label = this.priceToLabel(this.income);

    return "收入" + label + "/";
  }

  @computed
  get netSizeMinLabel(){
     return "最少有" + this.netSizeMin + "尺";
  }

  @computed
  get netSizeLabel(){
     return "實用" + this.netSize + "尺";
  }

  @computed
  get isSaleWithLeaseLabel(){
    return this.isSaleWithLease ? "連租賃" : "sl";
  }

  @computed
  get isFreeForSevenDayLabel(){
    return this.isFreeForSevenDay ? "七日免租期" : "f7";
  }

  @computed
  get isBuyWithLeaseLabel(){
    return this.isBuyWithLease? "連租賃" : "bl";
  }

  @computed
  get hasHomeHardwareLabel(){
    return this.hasHomeHardware? "設備" : "hw";
  }

  priceToLabel(price) {
    var label = "";
    const tenThousandDigit = parseInt(price / 10000);
    const thousandDigit = parseInt(price % 10000 / 1000);
    const hundredDigit = parseInt(price % 1000 / 100);

    if ( price <= 0) {
      return "0";
    }
    if (tenThousandDigit >= 1) {
      label += tenThousandDigit + "萬";
    }
    if (thousandDigit >= 1) {
      label += thousandDigit + "千";
    }
    if (hundredDigit >= 1) {
      label += hundredDigit + "百";
    }

    return label;
  }

  priceInTenThousandLabel(price) {

    var price = price * 10000;
    var label = "";
    const tenThousandDigit = parseInt(price / 10000);
    const thousandDigit = parseInt(price % 10000 / 1000);
    const hundredDigit = parseInt(price % 1000 / 100);

    if ( price <= 0 ) {
      return "0 error";
    }

    if (tenThousandDigit >= 1) {
      label += tenThousandDigit + "萬";
    }
    if (thousandDigit >= 1) {
      label += thousandDigit + "千";
    }
    if (hundredDigit >= 1) {
      label += hundredDigit + "百";
    }

    return label;
  }
  @computed
  get salePriceLabel() {
    var label = this.priceInTenThousandLabel(this.salePrice);
    return "開價" + label;
  }

  @computed
  get buyBudgetMaxLabel() {
    var label = this.priceInTenThousandLabel(this.buyBudgetMax);
    return "預算" + label;
  }

  getTimeInNum(time) {
    const MM = moment(time);
    const Y = MM.get("Y");
    const M = MM.get("M"); // 0 to 11
    const D = MM.get("D");
    const h = MM.get("h");
    const m = MM.get("m");
    const s = MM.get("s");

    const Days = D;
    const Hours = Days * 24;
    const Seconds = Hours * 60;
    const Months = M + 1;
    const Years = Y;
    return { Days, Hours, Seconds, Months, Years };
  }

  @computed
  get dueDayLabel() {
    const time = this.getTimeInNum(this.dueDay);
    return time.Months + "月" + time.Days + "日交吉/";
  }

  @computed
  get earlyTimeToViewLabel() {
    const time = this.getTimeInNum(this.earlyTimeToView);
    return time.Months + "月" + time.Days + "日後可睇樓/";
  }

  @computed
  get rentBudgetMaxLabel() {
    if (this.rentBudgetMax > 0) {
      return "租金預算" + this.priceToLabel(this.rentBudgetMax) + "/";
    }
    return "";
  }

  @computed
  get numOfPeopleLivingLabel() {
    return this.numOfPeopleLiving + "人住/";
  }

  @computed
  get colorByRoleName() {
    var color = "#088A4B";

    switch (this.typeTo) {
      case "buy":
        color = "#FF8000";
        break;
      case "lease":
        color = "#FF0000";
        break;
      case "sale":
        color = "#4000FF";
        break;
      case "rent":
        color = "#0080FF";
        break;
    }

    if (this.relatedFbid != null) {
      color = "#888888";
    }

    return color;
  }

  @computed
  get roleName() {
    var name = "none";

    switch (this.typeTo) {
      case "buy":
        name = "買家";
        break;
      case "lease":
        name = "房東";
        break;
      case "sale":
        name = "業主";
        break;
      case "rent":
        name = "租客";
        break;
    }


    if (this.relatedFbid != null) {
      name = "地產代理";
    }

    return name;
  }

  @computed 
  get levelLabel() {

    const level = LEVEL[0].find(element => element.value === this.level);
    return level === undefined ? "層" : level.label;
  }


  @computed 
  get leasingPeriodLabel(){
    return this.leasingPeriod === undefined? "個月" :  "最少租" +this.leasingPeriod + "個月";
  }
  
  @computed
  get isPetAllowedLabel(){
    return this.isPetAllowed ? "可養寵物" : "P";
  }

  @computed 
  get isViewAbleLabel() {
    return this.isViewAble ?  "可睇" : "V";
  }
  @computed
  get contactNameLabel() {
    return this.roleName + this.contactName;
  }

  @computed
  get typeToLabel() {
    var label = "no";
    switch (this.typeTo) {
      case "buy":
//        label = "搵買盤";
        label = "買家搜尋";
        break;
      case "lease":
//        label = "房東";
        label = "房東搜尋";
        break;
      case "sale":
//        label = "放賣盤";
        label = "業主搜尋";
        break;
      case "rent":
//        label = "租客";
        label = "租客搜尋";
        break;
    }
    return label;
  }
  @computed
  get numOfRoomLabel() {
    switch (this.numOfRoom) {
      case 0:
        return "開放式";
      case 1:
        return "1房";
      case 2:
        return "2房";
      case 3:
        return "3房";
      case 4:
        return "4房";
      case 5:
        return "5房";
    }
    return "x房";
  }

  @computed
  get partitionLabel() {
    return (
      "間隔" +
      this.numOfRoomLabel +
      this.numOfLivingroomLabel +
      this.numOfBathroomLabel +
      "/"
    );
  }

  // Use for form element
  // Make sure out as ['string','string','string']
  @computed 
  get partitionToArray() {
    const numOfRoom = String(this.numOfRoom);
    const numOfLivingroom = String(this.numOfLivingroom);
    const numOfBathroom = String(this.numOfBathroom);
    return [numOfRoom,numOfLivingroom, numOfBathroom];
  }

  @computed
  get numOfLivingroomLabel() {
    switch (this.numOfRoom) {
      case 0:
        return "";
      case 1:
        return "1廳";
      case 2:
        return "2廳";
      case 3:
        return "3廳";
    }
    return "x廳";
  }

  @computed
  get numOfBathroomLabel() {
    switch (this.numOfRoom) {
      case 0:
        return "";
      case 1:
        return "1廁";
      case 2:
        return "2廁";
      case 3:
        return "3廁";
      case 4:
        return "4廁";
      case 5:
        return "5廁";
      case 6:
        return "6廁";
    }
    return "x廁";
  }

//  const isTypeBy = type => this.typeBy === type;

  @computed 
  get typeByLabel() {

    return this.isTypeBy( "open " ) ? "等待回覆 " : "已跟進 ";
    // if ( this.typeBy === "open") {
    //   return "等待回覆 "
    // }
    // return "已跟進 "
  }

  @computed 
  get typeByFollowUpLabel() {

    if ( this.typeBy === "open") {
      return "即時回覆"
    } else if ( this.typeBy === "engage") {
      return "更新內容"
    }
    return "即時回覆"
  }

  // @computed
  // get hasHomeHardwareLabel() {
  //   if (this.hasHomeHardware) {
  //     return "有傢俬/";
  //   }

  //   return "";
  // }

  // @computed
  // get agentSelectedSegmentIndex() {
  //   if ( this.typeBy === 'open' ) {

  //   }
  // }

  @computed
  get leasePriceLabel() {
    return "租金" + this.priceToLabel(this.leasePrice) + "/";
  }

  // @computed
  // get isFreeForSevenDayLabel() {
  //   if (this.isFreeForSevenDay) {
  //     return "有免租期/";
  //   }
  //   return "";
  // }

  // setNetSize( netSize ) {
  //   this.netSize = netSize;
  // }
  // // this two methods will serialize and deserialize the todo
  // to keep the example clean I have done them, but you should consider using
  //https://github.com/mobxjs/serializr
  
  serialize() {
    //debugger
    return {
      id: this.id,
      uid: this.uid,
      fbid: this.fbid,
      relatedFbid: this.relatedFbid,
      //            text: this.text,
      done: this.done,
      //            location : this.location,
      type: this.type,

      orderByChild: this.orderByChild,

      isAgent: this.isAgent,
      createdAt: this.createdAt,
      realTime: this.realTime,
      typeTo: this.typeTo,
      typeBy: this.typeBy,
      typeFor: this.typeFor,

      district: this.district,
      addressRegion: this.addressRegion,
      addressLocation: this.addressLocation,
      nameOfBuilding: this.nameOfBuilding,
      propertyType: this.propertyType,
      flatType: this.flatType,
      nearByMtrLine: this.nearByMtrLine,
      nearByMtrStop: this.nearByMtrStop,

      salePrice: this.salePrice,
      salePriceMin: this.salePriceMin,
      salePriceMax: this.salePriceMax,
      leasePrice: this.leasePrice,
      leasePriceWithTax: this.leasePriceWithTax,
      leasePriceWithLandTax: this.leasePriceWithLandTax,
      leasePriceWithManagementFee: this.leasePriceWithManagementFee,
      leaseDepositPerMonth: this.leaseDepositPerMonth,
      rentBudgetMax: this.rentBudgetMax,
      buyBudgetMax: this.buyBudgetMax,

      netSize: this.netSize,
      netSizeMin: this.netSizeMin,
      netSizeMax: this.netSizeMax,
      numOfRoom: this.numOfRoom,
      numOfBathroom: this.numOfBathroom,
      numOfLivingroom: this.numOfLivingroom,
      numOfPeopleLiving: this.numOfPeopleLiving,
      contactName: this.contactName,
      contactPhone: this.contactPhone,
      contactEmail: this.contactEmail,

      // Sale Property
      numOfDayClosingDeal: this.numOfDayClosingDeal,
      //            isNegotiable : this.isNegotiable,
      //            isViewAble : this.isViewAble,
      isSaleWithLease: this.isSaleWithLease,

      // lease property
      isNegotiable: this.isNegotiable,
      isViewAble: this.isViewAble,
      isPreferPayAnnually: this.isPreferPayAnnually,
      hasHomeHardware: this.hasHomeHardware,
      jobNature: this.jobNature,

      isViewAbleNow: this.isViewAbleNow,
      isRentAbleNow: this.isRentAbleNow,
      isFreeForSevenDay: this.isFreeForSevenDay,
      // dueDay : this.dueDay.toJSON(),
      // earlyTimeToView : this.earlyTimeToView.toJSON(),
      dueDay: this.dueDay,
      earlyTimeToView: this.earlyTimeToView,
      income: this.income,
      isBuyWithLease: this.isBuyWithLease,

      // Additional 
      level : this.level,
      isPetAllowed : this.isPetAllowed,
      leasingPeriod : this.leasingPeriod
    };
  }

  @action
  static deserialize(json: Object) {
    const property = new Property();
    //property.id = json['id'] || nextId()
    property.id = json["id"] || uuid();
    property.text = json["text"] || "";
    property.done = json["done"] || false;
    property.price = json["price"] || 0;
    property.location = json["location"] || "";
    property.type = json["type"] || "";
    property.isAgent = json["isAgent"] || false;
    property.createdAt = json["createdAt"] || 0;
    property.typeTo = json["typeTo"] || "";
    property.typeBy = json["typeBy"] || "";
    property.typeFor = json["typeFor"] || "";
    property.name = json["name"] || "";

    console.log("deserialize property.id ", property.id);
    return property;
  }

  @action
  static deserializeObj(v, p) {
    //      const p = new Property();
    p.id = v.id;
    p.uid = v.uid;
    p.fbid = v.fbid;
    p.relatedFbid =v.relatedFbid;
    p.done = v.done;
    p.type = v.type;
    p.orderByChild = v.orderByChild;
    p.isAgent = v.isAgent;
    p.createdAt = v.createdAt;
    p.realTime = v.realTime;
    p.typeTo = v.typeTo;
    //p.createdAt = moment(v.createdAt).format('YYYY-MM-DD HH:mm:ss');
    p.typeBy = v.typeBy;
    p.typeFor = v.typeFor;
    p.district = v.district;
    p.addressRegion = v.addressRegion;
    p.addressLocation = v.addressLocation;
    p.nameOfBuilding = v.nameOfBuilding;
    p.propertyType = v.propertyType;
    p.flatType = v.flatType;
    p.nearByMtrLine = v.nearByMtrLine;
    p.nearByMtrStop = v.nearByMtrStop;
    p.salePrice = v.salePrice;
    p.salePriceMin = v.salePriceMin;
    p.salePriceMax = v.salePriceMax;
    p.leasePrice = v.leasePrice
    p.leasePriceWithTax = v.leasePriceWithTax;
    p.leasePriceWithLandTax = v.leasePriceWithLandTax;
    p.leasePriceWithManagementFee = v.leasePriceWithManagementFee;
    p.leaseDepositPerMonth = v.leaseDepositPerMonth;
    p.rentBudgetMax = v.rentBudgetMax;
    p.buyBudgetMax = v.buyBudgetMax;
    p.netSize = v.netSize;
    p.netSizeMin = v.netSizeMin;
    p.netSizeMax = v.netSizeMax;
    p.numOfRoom = v.numOfRoom;
    p.numOfBathroom = v.numOfBathroom;
    p.numOfLivingroom = v.numOfLivingroom;
    p.numOfPeopleLiving = v.numOfPeopleLiving;
    p.contactName = v.contactName;
    p.contactPhone = v.contactPhone;
    p.contactEmail = v.contactEmail;
    p.numOfDayClosingDeal = v.numOfDayClosingDeal;
    
    // Sale Property
    p.isSaleWithLease = v.isSaleWithLease;
    //            isViewAble : v.isViewAble,
    //            isNegotiable : v.isNegotiable,
    p.isNegotiable = v.isNegotiable;
    // lease property
    p.isViewAble = v.isViewAble;
    p.isPreferPayAnnually = v.isPreferPayAnnually;
    p.hasHomeHardware = v.hasHomeHardware;
    p.jobNature = v.jobNature;
    p.isViewAbleNow = v.isViewAbleNow;
    p.isRentAbleNow = v.isRentAbleNow;
    p.isFreeForSevenDay = v.isFreeForSevenDay;
    p.dueDay = v.dueDay;
    //earlyTimeToView : this.earlyTimeToView.toJSON(), //            dueDay : this.dueDay.toJSON(),
    p.earlyTimeToView = v.earlyTimeToView;
    p.income = v.income;
    p.isBuyWithLease = v.isBuyWithLease;


    p.level = v.level;
    p.isPetAllowed = v.isPetAllowed;
    p.leasingPeriod = v.leasingPeriod;
    return p;
  }

  @action
  restore(v) {
      this.id  = v.id, 
      this.uid  = v.uid, 
      this.fbid = v.fbid, 
      this.relatedFbid = v.relatedFbid, 
      this.done = v.done, 
      this.type = v.type,
      this.orderByChild = v.orderByChild, 
      this.isAgent = v.isAgent, 
      this.createdAt = v.createdAt, 
      this.realTime = v.realTime, 
      this.typeTo = v.typeTo, 
      this.typeBy = v.typeBy, 
      this.typeFor = v.typeFor, 
      this.district = v.district, 
      this.addressRegion = v.addressRegion, 
      this.addressLocation = v.addressLocation, 
      this.nameOfBuilding =v.nameOfBuilding, 
      this.propertyType = v.propertyType, 
      this.flatType = v.flatType, 
      this.nearByMtrLine = v.nearByMtrLine, (this.nearByMtrStop =
      v.nearByMtrStop), (this.salePrice = v.salePrice), (this.salePriceMin =
      v.salePriceMin), (this.salePriceMax = v.salePriceMax), (this.leasePrice =
      v.leasePrice), (this.leasePriceWithTax =
      v.leasePriceWithTax), (this.leasePriceWithLandTax =
      v.leasePriceWithLandTax), (this.leasePriceWithManagementFee =
      v.leasePriceWithManagementFee), (this.leaseDepositPerMonth =
      v.leaseDepositPerMonth),
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
      this.numOfDayClosingDeal = v.numOfDayClosingDeal, 
      this.isSaleWithLease = v.isSaleWithLease, 
      this.isNegotiable = v.isNegotiable, 
      this.isViewAble = v.isViewAble, 
      this.isPreferPayAnnually =v.isPreferPayAnnually,
      this.hasHomeHardware = v.hasHomeHardware, 
      this.jobNature = v.jobNature, 
      this.isViewAbleNow = v.isViewAbleNow, 
      this.isRentAbleNow = v.isRentAbleNow, 
      this.isFreeForSevenDay = v.isFreeForSevenDay, 
      this.dueDay = v.dueDay, 
      this.earlyTimeToView = v.earlyTimeToView, 
      //earlyTimeToView : this.earlyTimeToView.toJSON(), //            dueDay : this.dueDay.toJSON(),
      this.income = v.income, 
      this.isBuyWithLease = v.isBuyWithLease,


      this.level = v.level,
      this.isPetAllowed = v.isPetAllowed,
      this.leasingPeriod = v.leasingPeriod
  
  }
}
