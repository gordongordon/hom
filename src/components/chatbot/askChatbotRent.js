/* eslint global-require: 0 */
import React from "react";
import { ActionSheet, Button, Toast, Icon } from "antd-mobile";
import PropTypes from "prop-types";
import styled from 'styled-components';

//import ChatBot from '../react-simple-chatbot/dist/react-simple-chatbot';
import ChatBot from "react-simple-chatbot";
import Chatpicker from "./chatpicker";
import TabExample from "./TabExample";
import { ThemeProvider } from "styled-components";
import MobxStore from "mobxStore";
import views from "views";

import PartitionPicker from "./partitionPicker";
import { Fb } from "firebase-store";
import { Property } from "property";
import Key from './key';

import Slick from './slick';
import RCarouse from './rcarousel';

//import Generic from './chatbot-message-ui';


// Green
const theme = {
  background: "#F2f2f2",
  background: "#F2f2f2",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#F55869",
  headerFontColor: "#fecea8",
  botBubbleColor: "#e6e6e6",
  botFontColor: "#000",
  userBubbleColor: "#fecea8",
  userFontColor: "#000" 
};

// fix touch to scroll background page on iOS
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp("\\biPhone\\b|\\biPod\\b", "i").test(
  window.navigator.userAgent
);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault()
  };
}

const iconList = [
  {
    icon: (
      <img
        src="https://zos.alipayobjects.com/rmsportal/WmEzpOsElbbvgmrexFSH.png"
        alt="icon"
      />
    ),
    title: "发送给朋友"
  },
  {
    icon: (
      <img
        src="https://zos.alipayobjects.com/rmsportal/HssPJKvrjEByyVWJIFwl.png"
        alt="icon"
      />
    ),
    title: "新浪微博"
  },
  {
    icon: (
      <img
        src="https://zos.alipayobjects.com/rmsportal/HCGowLrLFMFglxRAKjWd.png"
        alt="icon"
      />
    ),
    title: "生活圈"
  },
  {
    icon: (
      <img
        src="https://zos.alipayobjects.com/rmsportal/LeZNKxCTkLHDWsjFfqqn.png"
        alt="icon"
      />
    ),
    title: "微信好友"
  },
  {
    icon: (
      <img
        src="https://zos.alipayobjects.com/rmsportal/YHHFcpGxlvQIqCAvZdbw.png"
        alt="icon"
      />
    ),
    title: "QQ"
  }
  //{ icon: <Icon type={require('./refresh.svg')} />, title: '刷新' },
  //  { icon: <Icon type={require('./link.svg')} />, title: '链接' },
  //  { icon: <Icon type={require('./complaints.svg')} />, title: '投诉' },
];

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      getBuildingUserInput: "",
      getNetSizeMinUserInput: "",
      getNumOfRoom: "",
      getNumOfBathroom: "",
      getNumOfLivingroom: "",
      isPetAllowedBoolean: "",
      isBuyWithLeaseBoolean: "",
      getBuyBudgetMaxInput: "",
      getLastNameUserInput: "",
      getSexUserInput : "",
      getEmailUserInput: "",
      getPhoneUserInput: ""
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    //const { name, role, price, building } = steps;
    const {
      getBuildingUserInput,
      getNetSizeMinUserInput,
//      getPartitionUserInput,
      getNumOfRoom,
      getNumOfBathroom,
      getNumOfLivingroom,
      isPetAllowedBoolean,
      isBuyWithLeaseBoolean,
      getBuyBudgetMaxInput,
      getLastNameUserInput,
      getSexUserInput,
      getEmailUserInput,
      getPhoneUserInput
    } = steps;

    this.setState({
      getBuildingUserInput,
      getNetSizeMinUserInput,
//      getPartitionUserInput,
      getNumOfRoom,
      getNumOfBathroom,
      getNumOfLivingroom,
      isPetAllowedBoolean,
      isBuyWithLeaseBoolean,
      getBuyBudgetMaxInput,
      getLastNameUserInput,
      getSexUserInput,
      getEmailUserInput,
      getPhoneUserInput
    });
    //    this.setState({ name, role, price, building, });
  }

  render() {
    //const { name, role, price, building } = this.state;
    const {
      getBuildingUserInput,
      getNetSizeMinUserInput,
//      getPartitionUserInput,
      getNumOfRoom,
      getNumOfBathroom,
      getNumOfLivingroom,
      isPetAllowedBoolean,
      isBuyWithLeaseBoolean,
      getBuyBudgetMaxInput,
      getLastNameUserInput,
      getSexUserInput, 
      getEmailUserInput,
      getPhoneUserInput 
    } = this.state; 
    return (
      <div style={{ width: "100%", fontSize: "0.8rem" }}>
        尋找樓盤: {getBuildingUserInput.value}
        <br />
        最少實用面積: {getNetSizeMinUserInput.value} 呎
        <br />
        付出預算上限: {getBuyBudgetMaxInput.value}
        <br />
        間隔: {getNumOfRoom.value}房,{getNumOfBathroom.vlaue}廁,{getNumOfLivingroom.value}廳
        <br />
        你會唔會養物: {isPetAllowedBoolean.value}
        <br />
        冇樓睇租左俾人會唔會買: {isBuyWithLeaseBoolean.value}
        <br />
        姓名: {getLastNameUserInput.value} {getSexUserInput.value} 
        <br />
        聯絡手機: {getPhoneUserInput.value}
        <br />
        電郵: {getEmailUserInput.value}
        <br />
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object
};

Review.defaultProps = {
  steps: undefined
};

class AskChatbotRent extends React.Component {


  constructor(props) {
    super(props);

    this.displayName = "MrHouse";
    
    this.state = {
      clicked: "none",
      clicked1: "none",
      clicked2: "none"
    };
    //this.addPropertyForBuy = this.addPropertyForBuy.bind(this);
  }

  showActionSheet = () => {
    const BUTTONS = ["操作一", "操作二", "操作三", "删除", "取消"];
    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        destructiveButtonIndex: BUTTONS.length - 2,
        // title: '标题',
        message: "我是描述我是描述",
        maskClosable: true,
        "data-seed": "logId",
        wrapProps
      },
      buttonIndex => {
        this.setState({ clicked: BUTTONS[buttonIndex] });
      }
    );
  };
  showShareActionSheet = () => {
    const icons = [...iconList];
    icons.length = 4;
    ActionSheet.showShareActionSheetWithOptions(
      {
        options: icons,
        // title: '标题',
        message: "我是描述我是描述",
        className: "my-action-sheet"
      },
      buttonIndex => {
        this.setState({
          clicked1: buttonIndex > -1 ? icons[buttonIndex].title : "cancel"
        });
        // also support Promise
        return new Promise(resolve => {
          Toast.info("1000ms 后关闭");
          setTimeout(resolve, 1000);
        });
      }
    );
  };
  showShareActionSheetMulpitleLine = () => {
    const icons = [[...iconList], [iconList[5], iconList[6], iconList[7]]];
    ActionSheet.showShareActionSheetWithOptions(
      {
        options: icons,
        // title: '标题',
        message: "我是描述我是描述",
        className: "my-action-sheet"
      },
      (buttonIndex, rowIndex) => {
        this.setState({
          clicked2:
            buttonIndex > -1 ? icons[rowIndex][buttonIndex].title : "cancel"
        });
      }
    );
  };

  componentDidMount() {
    //this.handleEnd = this.handleEnd.bind(this);
  }

  // addPropertyForBuy = ( steps ) =>
  // {
  //   var p = new Property();
  //   var id;

  //   const {
  //     getBuildingUserInput,
  //     getNetSizeMinUserInput,
  //     getPartitionUserInput,
  //     isPetAllowedBoolean,
  //     isBuyWithLeaseBoolean,
  //     getBuyBudgetMaxInput,
  //     getLastNameUserInput,
  //     getEmailUserInput,
  //     getPhoneUserInput
  //   } = steps;

  //   //p.uid = MobxStore.app.uid;
  //   //     ["NTTV", "MOS", "MOS0001"]
  //   p.addressRegion = "NTTV";
  //   p.addressLocation = "MOS";
  //   p.nameOfBuilding = "MOS0001";

  //   // p.dueDay = v.dueDay.toJSON();
  //   // p.earlyTimeToView = v.earlyTimeToView.toJSON();
  //   // p.salePriceMax = parseInt( v.salePriceMax )

  //   //p.leasePrice = parseInt(v.leasePrice);
  //   //debugger
  //   p.numOfRoom = parseInt("0");
  //   p.numOfBathroom = parseInt("1");
  //   p.numOfLivingroom = parseInt("1");

  //   p.isBuyWithLease = isBuyWithLeaseBoolean;
  //   p.netSizeMin = parseInt(getNetSizeMinUserInput);
  //   p.buyBudgetMax = parseInt( getBuyBudgetMaxInput);

  //   //p.isPreferPayAnnually = v.isPreferPayAnnually;
  //   //p.isRentAbleNow = v.isRentAbleNow;
  //   //p.isFreeForSevenDay = v.isFreeForSevenDay;

  //   //p.hasHomeHardware = v.hasHomeHardware;
  //   //p.isViewAble = v.isViewAble;
  //   //    p.howToContact = parseInt( howToContact[0] );
  //   p.contactName = getLastNameUserInput;
  //   debugger
  //   p.contactPhone = parseInt(getPhoneUserInput);
  //   p.contactEmail = getEmailUserInput;
  //   p.isPetAllowed = isPetAllowedBoolean;

  //   if (MobxStore.app.uid === null) {
  //     if (Fb.startLoginAnonyhmously()) {
  //       id = Fb.app.usersRef.push().key;
  //     }
  //   } else {
  //     id = Fb.app.usersRef.push().key;
  //   }
  //   p.uid = MobxStore.app.uid;
  //   p.typeFor = 'sale';
  //   p.typeTo = 'buy';
  //   p.fbid = id; // Assign a reference

  //   Fb.app.usersRef.update({ [id]: p.serialize() });

  //   Fb.propertys.child(id).set(p.serialize());
  //   Fb.buy.child(id).set(p.serialize());

  //   // const id2 = Fb.propertys.push().key;
  //   // Fb.propertys.update( {[id2]:  p.serialize() });
  //   MobxStore.router.goTo(views.matchBuy, { keyID: id });

  //   return id;
  // }

  handleEnd = ({ steps, values }) => {
    var p = new Property();
    var id;

    const {
      getBuildingUserInput,
      getNetSizeMinUserInput,
//      getPartitionUserInput,
      getNumOfRoom,
      getNumOfBathroom,
      getNumOfLivingroom,
      isPetAllowedBoolean,
      isBuyWithLeaseBoolean,
      getBuyBudgetMaxInput,
      getLastNameUserInput,
      getSexUserInput,
      getEmailUserInput,
      getPhoneUserInput
    } = steps;

    //    R.isNil(getBuyBudgetMaxInput)
    console.log("handleEnd steps", steps);

    //p.uid = MobxStore.app.uid;
    //     ["NTTV", "MOS", "MOS0001"]
    p.addressRegion = "NTTV";
    p.addressLocation = "MOS";
    p.nameOfBuilding = "MOS0001";

    // p.dueDay = v.dueDay.toJSON();
    // p.earlyTimeToView = v.earlyTimeToView.toJSON();
    // p.salePriceMax = parseInt( v.salePriceMax )

    //p.leasePrice = parseInt(v.leasePrice);
    //debugger
    p.numOfRoom = parseInt(getNumOfRoom.value);
    p.numOfBathroom = parseInt(getNumOfBathroom.value);
    p.numOfLivingroom = parseInt(getNumOfLivingroom.value);

    p.isBuyWithLease = isBuyWithLeaseBoolean.value;
    p.netSizeMin = parseInt(getNetSizeMinUserInput.value);
    //debugger
    p.buyBudgetMax = parseInt(getBuyBudgetMaxInput.value);
    //    p.buyBudgetMax = 100;

    //p.isPreferPayAnnually = v.isPreferPayAnnually;
    //p.isRentAbleNow = v.isRentAbleNow;
    //p.isFreeForSevenDay = v.isFreeForSevenDay;

    //p.hasHomeHardware = v.hasHomeHardware;
    //p.isViewAble = v.isViewAble;
    //    p.howToContact = parseInt( howToContact[0] );
    p.contactName = getLastNameUserInput.value + getSexUserInput.value;
    //debugger
    p.contactPhone = parseInt(getPhoneUserInput.value);
    p.contactEmail = getEmailUserInput.value;
    p.isPetAllowed = isPetAllowedBoolean.value;

    if (MobxStore.app.uid === null) {
      if (Fb.startLoginAnonyhmously()) {
        id = Fb.app.usersRef.push().key;
      }
    } else {
      id = Fb.app.usersRef.push().key;
    }
    p.uid = MobxStore.app.uid;
    p.typeFor = "sale";
    p.typeTo = "buy";
    p.fbid = id; // Assign a reference

    Fb.app.usersRef.update({ [id]: p.serialize() });

    Fb.propertys.child(id).set(p.serialize());
    Fb.buy.child(id).set(p.serialize());

    // const id2 = Fb.propertys.push().key;
    // Fb.propertys.update( {[id2]:  p.serialize() });
//    MobxStore.router.goTo(views.matchBuy, { keyID: id });
    MobxStore.router.goTo(views.chatAgentSaleRespond, { keyID: id });
    
    // console.log(steps);
    // console.log(values);
    // alert(`Chat handleEnd callback! Number: ${values[0]}`);
    //MobxStore.router.goTo(views.list);
    // const keyID = this.addPropertyForBuy( value )
    // debugger;
    // console.log(steps);
    // this.addPropertyForBuy( steps );
    //MobxStore.router.goTo( views.matchBuy, { keyID } )
  };

  // setIdWelcome2 = ( trigger ) => {
  //    return {
  //       id: "welcome2",
  //       message: "5分鐘前，我幫陳先生放租。結果，已經有5位地產👩🏻agents係3分鐘內回覆佢。👏",
  //       trigger: trigger

  //     }
  // }



  render() {

    const GetName = [
        {
            id: "welcome",
            message: "Lets begin to Rent ...",
            trigger: 'getSex'
          },        
      {
        id: "getSex",
        message: "{previousValue} 我應該稱呼你先生(Mr)/ 小姐(Ms)?",
        trigger: "getSexUserInput"
      },      
      {
        id: "getSexUserInput",
        options: [
          { value: "先生", label: "先生(Mr)", trigger: "getLastName" },
          { value: "小姐", label: "小姐(Miss)", trigger: "getLastName" }
        ]
      },

      // Input Field
      {
        // getXXX
        id: "getLastName",
        message: " Ok, {previousValue} 明白。請問你貴姓？",
        trigger: "getLastNameUserInput"
        // MISSED " validation = false"
      },
      {
        // on.FILLED
        id: "getLastNameUserInput",
        user: true,
        inputType: 'text',
        trigger: "getBuilding"
      }];

    const Welcome = [
    ];

    const AboutMrHouse = [
    ];

    const MainSteps = [
      {
        // getBuilding
        id: "getBuilding",
        message :  ({ previousValue, steps }) => {
          return `${steps.getLastNameUserInput.value} ${steps.getSexUserInput.value} 好高興認識你呀☺  你暫時個心水樓盤喺邊度？`;
          },
        trigger: "getBuildingUserInput"
        // MISSED " validation = false"
      },
      {
        // on.FILLED
        id: "getBuildingUserInput",
        //component: <Key placeholder="96181448"/>,
        component: <Chatpicker />,
        //component: <Slick />,
        //component: <RCarouse />,
        //component: <Generic className="cumi Generic"/>,

        waitAction: true,
        trigger: "validaBuildingUserInput"
      },
      // valida chatbot input
      {
        //
        id: "validaBuildingUserInput",
        message: "你選擇左 「{previousValue}」!",
        trigger: "validaBuildingBoolean"
      },
      {
        //on.OPTION1 .. n
        id: "validaBuildingBoolean",
        options: [
          { value: "true", label: "👍🏻係", trigger: "getNetSizeMin" },
          {
            value: "false",
            label: "👎🏻唔係",
            trigger: "update-buildingUserInput"
          }
        ]
      },
      {
        // update if previous ask no
        id: "update-buildingUserInput",
        update: "getBuildingUserInput",
        trigger: "validaBuildingUserInput"
      },
      {
        // getNetSizeMin
        id: "getNetSizeMin",
        message: "你個心水樓盤最小要幾多實用面積（呎）?",
        trigger: "getNetSizeMinUserInput"
        // MISSED " validation = false"
      },
      {
        // on.FILLED
        id: "getNetSizeMinUserInput",
//              user: true,
        options: [
          { value: "200", label: "200", trigger: "getNumOfPeopleLiving" },
          { value: "300", label: "300", trigger: "getNumOfPeopleLiving" },
          { value: "500", label: "500", trigger: "getNumOfPeopleLiving" },
          { value: "700", label: "700", trigger: "getNumOfPeopleLiving" },
          { value: "900", label: "900", trigger: "getNumOfPeopleLiving" },
          { value: "1100", label: "1100", trigger: "getNumOfPeopleLiving" },
          { value: "1300", label: "1300", trigger: "getNumOfPeopleLiving" },
          { value: "1500", label: "1500", trigger: "getNumOfPeopleLiving" },
          { value: "1700", label: "1700", trigger: "getNumOfPeopleLiving" },
          { value: "2000", label: "2000+", trigger: "getNumOfPeopleLiving" },
        ]
        //trigger: "getPartition"
      },
      {
        id: "getNumOfPeopleLiving",
        message : "個單位會有幾多人同你住？",
        trigger: "getNumOfPeopleLivingInput"
      },
      {
        // on.FILLED
        id: "getNumOfPeopleLivingInput",
//              user: true,
        options: [
          { value: "1", label: "1人", trigger: "getPartition" },
          { value: "2", label: "2人", trigger: "getPartition" },
          { value: "3", label: "3人", trigger: "getPartition" },
          { value: "4", label: "4人", trigger: "getPartition" },
          { value: "5", label: "5人", trigger: "getPartition" },
          { value: "6", label: "6人", trigger: "getPartition" },
        ]
        //trigger: "getPartition"
      },
      
      // Input Field
      {
        // getPartition
        id: "getPartition",
        message: "你想要咩間隔？ e.g. 1房,1廁,1廳",
        trigger: "getNumOfRoom"
        // MISSED " validation = false"
      },
//            {
//            id: "getPartitionUserInput",
//           component: <PartitionPicker />,
//           waitAction: true,
//          trigger: "getNumOfRoom"
//        },
      {
        id: "getNumOfRoom",
        options: [
          { value: "0", label: "開放式", trigger: "getNumOfBathroom" },
          { value: "1", label: "1房", trigger: "getNumOfBathroom" },
          { value: "2", label: "2房", trigger: "getNumOfBathroom" },
          { value: "3", label: "3房", trigger: "getNumOfBathroom" },
          { value: "4", label: "4房", trigger: "getNumOfBathroom" },
        ]
      },
      {
        id: "getNumOfBathroom",
        options: [
          { value: "0", label: "0廁", trigger: "getNumOfLivingroom" },
          { value: "1", label: "1廁", trigger: "getNumOfLivingroom" },
          { value: "2", label: "2廁", trigger: "getNumOfLivingroom" },
          { value: "3", label: "3廁", trigger: "getNumOfLivingroom" },
          { value: "4", label: "4廁", trigger: "getNumOfLivingroom" },
          { value: "10", label: "共用廁", trigger: "getNumOfLivingroom" },
        ]
      },
      {
        id: "getNumOfLivingroom",
        options: [
          { value: "0", label: "0廳", trigger: "isPetAllowed" },
          { value: "1", label: "1廳", trigger: "isPetAllowed" },
          { value: "2", label: "2廳", trigger: "isPetAllowed" },
          { value: "3", label: "3廳", trigger: "isPetAllowed" },
          { value: "4", label: "4廳", trigger: "isPetAllowed" },
          { value: "10", label: "共用廳", trigger: "isPetAllowed" },
        ]
      },

      // toggle
      {
        //
        id: "isPetAllowed",
        message: "你會唔會養😺😺🐶🐶呢？",
        trigger: "isPetAllowedBoolean"
      },
      {
        //on.OPTION1 .. n
        id: "isPetAllowedBoolean",
        options: [
          { value: "false", label: "絕對不會", trigger: "hasHomeHardware" },
          { value: "true", label: "一定/可能啦", trigger: "hasHomeHardware" }
        ]
      },
      // toggle
      {
        //
        id: "hasHomeHardware",
        message: "需唔需要傢俬？",
        trigger: "hasHomeHardwareBoolean"
      },
      {
        //on.OPTION1 .. n
        id: "hasHomeHardwareBoolean",
        options: [
          { value: "false" , label: "唔需要", trigger: "getRentBudgetMax" }, 
          { value: "true" , label: "一定要", trigger: "getRentBudgetMax" }
        ]
      },

      // Input Field
      {
        // getXXX
        id: "getRentBudgetMax",
        message: "你嘅租金預算係幾多（元）💵? e.g. 8000",
        trigger: "getRentBudgetMaxInput"
        // MISSED " validation = false"
      },
      {
        // on.FILLED
        id: "getRentBudgetMaxInput",
        user: true,
        inputType: 'number',
        pattern : "[0-9]*",
        trigger: "getLeasingPeriod"
      },
      {
         id: "getLeasingPeriod",
         message : "你打算租幾耐 (月)？",
         trigger: "getLeasingPeriodInput"
      },
      {
        id: "getLeasingPeriodInput",
        options: [
          { value: "12", label: "12月", trigger: "getJobNature" },
          { value: "24", label: "24月", trigger: "getJobNature" },
          { value: "2",  label:  "2月", trigger: "getJobNature" },
          { value: "4",  label:  "4月", trigger: "getJobNature" },
          { value: "6",  label:  "6月", trigger: "getJobNature" },
        ]
      },
      {
        id: "getJobNature",
        message : "為咗業主可以了解你多啲, 加唔介意話我知你嘅職業？（想保守私隱，可以填寫others)？",
        trigger: "getJobNatureInput"
     },
     {
       id: "getJobNatureInput",
       options: [
         { value: "A", label: "Job A", trigger: "getIncome" },
         { value: "B", label: "Job B", trigger: "getIncome" },
         { value: "C",  label:  "Job C", trigger: "getIncome" },
         { value: "D",  label:  "Job D", trigger: "getIncome" },
       ]
     },
     {
       id: "getIncome", 
       message : "你嘅收入範圍係幾多？",
       trigger: "getIncomeInput"
     },
     {
      id: "getIncomeInput",
      options: [
        { value: "10", label: "under 10K", trigger: "getEmail" },
        { value: "15", label:   "11k~15k", trigger: "getEmail" },
        { value: "20",  label:  "16k~20k", trigger: "getEmail" },
        { value: "25",  label:  "21k~25k", trigger: "getEmail" },
        { value: "30",  label:  "26k~30k", trigger: "getEmail" },
        { value: "35",  label:  "31k~35k", trigger: "getEmail" },
        { value: "40",  label:     "36k+", trigger: "getEmail" },
      ]
    },
    
      // Input Field
      {
        // getXXX
        id: "getEmail",
        message :  ({ previousValue, steps }) => {
                   return `hi,${steps.getLastNameUserInput.value} ${steps.getSexUserInput.value} ! 最後，可唔可以要你email ？（ 如果有正嘢我可以通知你，📧電郵絕對保密，放心！）e.g. info@mr.house` 
                                },
        trigger: "getEmailUserInput"
        // MISSED " validation = false"
      },
      {
        // on.FILLED
        id: "getEmailUserInput",
        user: true,
        inputType: 'email',
        pattern: "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
        trigger: "getPhone"
      },
      // Input Field
      {
        // getXXX
        id: "getPhone",
        message: "OK! 係我廣播你嘅房屋要求比所有地產agents之前，介唔介意比你📞電話號碼我？（當你想聯絡對方，你可以share電話比人。電話絕對保密 e.g. 96181448",
        trigger: "getPhoneUserInput"
        // MISSED " validation = false"
      },
      {
        // on.FILLED
        id: "getPhoneUserInput",
        user: true,
        validator: value => {
          if (isNaN(value)) {
            return "value must be a number";
          } else if (value < 0) {
            return "value must be positive";
          } else if (value > 100000000) {
            return `${value}? Come on!`; 
          }

          return true;
        },
        inputType: 'number',
        pattern : "[0-9]*",
        trigger: "review"
      },
      {
        id: "review",
        message: "請check一check以下你輸入啲資料係咪正確：",
        trigger: "isReview"
      },
      {
        id: "isReview",
        component: <Review />,
        asMessage: true,
        trigger: "update"
      },
      {
        id: "update",
        message: "有冇野要更改？",
        trigger: "update-question"
      },
      {
        id: "update-question",
        options: [
          { value: "yes", label: "有野要更改", trigger: "update-yes" },
          { value: "message", label: "冇呀，謝謝！請帶我到下一步/ 我要更改資料", trigger: "redirectMessage" },
          { value: "next", label: "沒必要謝謝!直接去下一個屏幕!", trigger: "countDown" },
        ]
      },
      {
        id: "update-yes",
        message: "你要更改邊個內容？",
        trigger: "update-fields"
      },
      {
        id: "update-fields",
        options: [
          {
            value: "redirectMessage",
            label: "取消更新",
            trigger: "redirectMessage"
          },
          {
            value: "getBuildingUserInput",
            label: "建築名稱",
            trigger: "update-getBuildingUserInput"
          },
          {
            value: "getnetSizeMinUserInput",
            label: "實用面積/呎",
            trigger: "update-getNetSizeMinUserInput"
          },
          {
            value: "getPartitionUserInput",
            label: "間隔",
            trigger: "update-getPartitionUserInput"
          },
          {
            value: "hasHardwareBoolean",
            label: "需唔需要傢俬",
            trigger: "update-hasHardwareBoolean"
          },
          {
            value: "isPetAllowedBoolean",
            label: "可養寵物",
            trigger: "update-isPetAllowedBoolean"
          },
          {
            value: "isBuyWithLeaseBoolean",
            label: "賣買連租賃",
            trigger: "update-isBuyWithLeaseBoolean"
          },
          {
            value: "getLeasingPeriodInput",
            label: " 你打算租幾耐 (月)",
            trigger: "update-getLeasingPeriodInput"
          },
          {
            value: "getJobNatureInput",
            label: "職業",
            trigger: "update-getJobNatureInput"
          },
          {
            value: "getNumOfPeopleLivingInput",
            label: "職業",
            trigger: "update-getNumOfPeopleLivingInput"
          },
          {
            value: "getIncomeInput",
            label: "收入範圍",
            trigger: "update-getIncomeInput"
          },

          {
            value: "getBuyBudgetMax",
            label: "預算上限",
            trigger: "update-getBuyBudgetMaxInput"
          },
          {
            value: "getLastNameUserInput",
            label: "姓氏",
            trigger: "update-getLastNameUserInput"
          },
          {
            value: "getEmailuserInput",
            label: "eMail",
            trigger: "update-getEmailUserInput"
          },
          {
            value: "getPhoneUserInput",
            label: "電話號碼",
            trigger: "update-getPhoneUserInput"
          }
        ]
      },
      // Update review
      {
        // update if previous ask no
        id: "update-getBuildingUserInput",
        update: "getBuildingUserInput",
        trigger: "review"
      },
      // Update review
      {
        // update if previous ask no
        id: "update-getNetSizeMinUserInput",
        update: "getNetSizeMinUserInput",
        trigger: "review"
      },
      // Update review
      {
        // update if previous ask no
        id: "update-getPartitionUserInput",
        update: "getPartitionUserInput",
        trigger: "review"
      },
      // Update review
      {
        // update if previous ask no
        id: "update-hasHardwareBoolean",
        update: "hasHardwareBoolean",
        trigger: "review"
      },
      // Update review
      {
        // update if previous ask no
        id: "update-getIncomeInput",
        update: "getIncomeInput",
        trigger: "review"
      },
      // Update review
      {
        // update if previous ask no
        id: "update-getJobNatureInput",
        update: "getJobNatureInput",
        trigger: "review"
      },
      // Update review
      {
        // update if previous ask no
        id: "update-getLeasingPeriodInput",
        update: "getLeasingPeriodInput",
        trigger: "review"
      },
      // Update review
      {
        // update if previous ask no
        id: "update-isPetAllowedBoolean",
        update: "isPetAllowedBoolean",
        trigger: "review"
      },
      // Update review
      {
        // update if previous ask no
        id: "update-isBuyWithLeaseBoolean",
        update: "isBuyWIthLeaseBoolean",
        trigger: "review"
      },
      // Update review
      {
        // update if previous ask no
        id: "update-getNumOfPeopleLivingInput",
        update: "getNumOfPeopleLivingInput",
        trigger: "review"
      },
      // Update review
      // Update review
      {
        // update if previous ask no
        id: "update-getBuyBudgetMaxInput",
        update: "getBuyBudgetMaxInput",
        trigger: "review"
      },

      {
        // update if previous ask no
        id: "update-getLastNameUserInput",
        update: "getLastNameUserInput",
        trigger: "review"
      },
      {
        // update if previous ask no
        id: "update-getEmailUserInput",
        update: "getEmailUserInput",
        trigger: "review"
      },
      {
        // update if previous ask no
        id: "update-getPhoneUserInput",
        update: "getPhoneUserInput",
        trigger: "review"
      }
    ];

   const EndOfSteps = [   
      {
        id: "redirectMessage",
        message: "太好了。 現在準備滿足您的要求！我們開始廣播你的請求比所有地產agents知。聊天將會關閉並重新定向到新屏幕。",
        delay: 5000,
        trigger: "matchingMessage2"
      },
      {
        id: "matchingMessage2",
        message: "在下一個屏幕，你可以係左上角揀取地產agents的回覆或右上角揀取Mr. House為你配對的業主。",
        delay: 5000,
        trigger: "countDown"
      },
      {
        id: "countDown",
        message: "3...你準備好未？",
        delay : 2000,
        trigger: "countDown2"
      },
      {
        id: "countDown2",
        message: "2..Yes! 快啲跳去下一頁",
        delay : 1000,
        trigger: "countDown1"
      },
      {
        id: "countDown1",
        message: "1.",
        delay : 1000,
        trigger: "stop"
      },
      {
        // stop
        id: "stop",
        message: "stop",
        end: true
      }
    ];

    const saleSteps = [];
    const rentSteps = [];
    const leaseSteps = [];
    const redirectSteps = [];

    // Concat mesage into conversation
    //let ms1 = Welcome.concat( AboutMrHouse );
    let ms1 = GetName.concat( MainSteps );
    let conversation = ms1.concat( EndOfSteps );

    //  garbage collection
    ms1 = null;
    //ms2 = null;
    
    // console.log( conversation );
    //console.log( this.addPropertyForBuy );
    // debugger
    return (
      <div>
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Mr.House"
          hideSubmitButton="false"
          // hideBotAvatar="false"
          placeholder="請輸入這裏"
          handleEnd={this.handleEnd}
          //cache="true"
          //cacheName="mrhouse"
          //floating="true"
//          bubbleStyle={{ overflow: "visible", fontSize: "0.3rem" }}
          steps={
            conversation
          }
        />
      </ThemeProvider>
      </div>
    );
  }
}

export default AskChatbotRent;
