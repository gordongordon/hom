/* eslint global-require: 0 */
import React from "react";
import { ActionSheet, Button, Toast, Icon } from "antd-mobile";
import PropTypes from "prop-types";
import styled from "styled-components";

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
import Key from "./key";

import Slick from "./slick";
import RCarouse from "./rcarousel";

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

      hasHomeHardwareBoolean: "",
      isPetAllowedBoolean: "",
      getLeasingPeriodInput: "",
      getNumOfPeopleLivingInput: "",
      getJobNatureInput: "",

      getRentBudgetMaxInput: "",
      getLastNameUserInput: "",
      getSexUserInput: "",
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
      getRentBudgetMaxInput,
      getLastNameUserInput,
      getSexUserInput,
      getEmailUserInput,
      getPhoneUserInput,

      hasHomeHardwareBoolean,
      getNumOfPeopleLivingInput,
      getIncomeInput,
      getLeasingPeriodInput,
      getJobNatureInput
    } = steps;

    this.setState({
      getBuildingUserInput,
      getNetSizeMinUserInput,
      //      getPartitionUserInput,
      getNumOfRoom,
      getNumOfBathroom,
      getNumOfLivingroom,
      isPetAllowedBoolean,
      getRentBudgetMaxInput,
      getLastNameUserInput,
      getSexUserInput,
      getEmailUserInput,
      getPhoneUserInput,
    
      hasHomeHardwareBoolean,
      getNumOfPeopleLivingInput,
      getIncomeInput,
      getLeasingPeriodInput,
      getJobNatureInput
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
      getRentBudgetMaxInput,
      getLastNameUserInput,
      getSexUserInput,
      getEmailUserInput,
      getPhoneUserInput,

      hasHomeHardwareBoolean,
      getNumOfPeopleLivingInput,
      getIncomeInput,
      getLeasingPeriodInput,
      getJobNatureInput
    } = this.state;

    return (
      <div style={{ width: "100%", fontSize: "0.8rem" }}>
      心水租盤: {getBuildingUserInput.value}
        <br />
        最少實用面積: {getNetSizeMinUserInput.value} 呎
        <br />
        租金預算上限: {getRentBudgetMaxInput.value}
        <br />
        間隔: {getNumOfRoom.value}房,{getNumOfBathroom.vlaue}廁,{getNumOfLivingroom.value}廳
        <br />
        養貓狗需要: {isPetAllowedBoolean.value}
        <br />
        收入範圍: {getIncomeInput.value}
        <br />
        傢俬需要: {hasHomeHardwareBoolean.value}
        <br />
        職業: {getJobNatureInput.value}
        <br />
        理想租期: {getLeasingPeriodInput.value} (月)
        <br />
        同居人數:{getNumOfPeopleLivingInput.value}人
        <br />
        姓名: {getNameInput.value}
        <br />
        電話: {getPhoneUserInput.value}
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
      hasHomeHardwareBoolean,
      getNumOfLivingroomInput,
      getNumOfPeopleLivingInput,
      getLeasingPeriodInput,
      isPetAllowedBoolean,
      getIncomeInput,
      getJobNatureInput,
      getRentBudgetMaxInput,
      getNameInput,
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

    //p.isBuyWithLease = isBuyWithLeaseBoolean.value;
    p.netSizeMin = parseInt(getNetSizeMinUserInput.value);
    //debugger
    p.rentBudgetMax = parseInt(getRentBudgetMaxInput.value);

    p.hasHomeHardware = hasHomeHardwareBoolean.value;
    p.numOfPeopleLiving = parseInt(getNumOfPeopleLivingInput.value);
    p.leasingPeriod = parseInt(getLeasingPeriodInput.value);
    p.income = parseInt(getIncomeInput.value);
    p.jobNature = parseInt(getJobNatureInput.value);

    //    p.buyBudgetMax = 100;

    //p.isPreferPayAnnually = v.isPreferPayAnnually;
    //p.isRentAbleNow = v.isRentAbleNow;
    //p.isFreeForSevenDay = v.isFreeForSevenDay;

    //p.hasHomeHardware = v.hasHomeHardware;
    //p.isViewAble = v.isViewAble;
    //    p.howToContact = parseInt( howToContact[0] );
    p.contactName = getNameInput.value;
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
    p.typeFor = "lease";
    p.typeTo = "rent";
    p.fbid = id; // Assign a reference

    Fb.app.usersRef.update({ [id]: p.serialize() });

    Fb.propertys.child(id).set(p.serialize());
    Fb.rent.child(id).set(p.serialize());

    // const id2 = Fb.propertys.push().key;
    // Fb.propertys.update( {[id2]:  p.serialize() });
    //    MobxStore.router.goTo(views.matchBuy, { keyID: id });
    MobxStore.router.goTo(views.chatAgentLeaseRespond, { keyID: id });

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
        message: "Ok, 你想租屋的。",
        trigger: "getName"
      },
      {
        id: "getName",
        message: "請問如何稱呼你？",
        trigger: "getNameInput"
      },
      {
        // on.FILLED
        id: "getNameInput",
        user: true,
        inputType: "text",
        trigger: "getBuilding"
      }
    ];

    const Welcome = [];

    const AboutMrHouse = [];

    const MainSteps = [
      {
        // getBuilding
        id: "getBuilding",
        message: ({ previousValue, steps }) => {
          return `${
            steps.getNameInput.value
          } 好高興認識你呀☺  你想租嘅心水單位喺邊度？`;
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
        message: "你個心水租盤最小要幾多實用面積（呎）？",
        trigger: "getNetSizeMinUserInput"
        // MISSED " validation = false"
      },
      {
        // on.FILLED
        id: "getNetSizeMinUserInput",
        //              user: true,
        options: [
          { value: "100", label: "100", trigger: "getNumOfPeopleLiving" },
          { value: "200", label: "200", trigger: "getNumOfPeopleLiving" },
          { value: "300", label: "300", trigger: "getNumOfPeopleLiving" },
          { value: "400", label: "400", trigger: "getNumOfPeopleLiving" },
          { value: "500", label: "500", trigger: "getNumOfPeopleLiving" },
          { value: "600", label: "600", trigger: "getNumOfPeopleLiving" },
          { value: "700", label: "700", trigger: "getNumOfPeopleLiving" },
          { value: "800", label: "800", trigger: "getNumOfPeopleLiving" },
          { value: "900", label: "900", trigger: "getNumOfPeopleLiving" },
          { value: "1100", label: "1100", trigger: "getNumOfPeopleLiving" },
          { value: "1300", label: "1300", trigger: "getNumOfPeopleLiving" },
          { value: "1500", label: "1500", trigger: "getNumOfPeopleLiving" },
          { value: "1700", label: "1700", trigger: "getNumOfPeopleLiving" },
          { value: "2000", label: "2000+", trigger: "getNumOfPeopleLiving" }
        ]
        //trigger: "getPartition"
      },
      {
        id: "getNumOfPeopleLiving",
        message: "個單位會有幾多人同你住？",
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
          { value: "6", label: "6人+", trigger: "getPartition" }
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
          { value: "4", label: "4房", trigger: "getNumOfBathroom" }
        ]
      },
      {
        id: "getNumOfBathroom",
        options: [
          { value: "1", label: "1廁", trigger: "getNumOfLivingroom" },
          { value: "2", label: "2廁", trigger: "getNumOfLivingroom" },
          { value: "3", label: "3廁", trigger: "getNumOfLivingroom" },
          { value: "4", label: "4廁", trigger: "getNumOfLivingroom" },
          { value: "0", label: "共用廁", trigger: "getNumOfLivingroom" }
        ]
      },
      {
        id: "getNumOfLivingroom",
        options: [
          { value: "1", label: "1廳", trigger: "isPetAllowed" },
          { value: "2", label: "2廳", trigger: "isPetAllowed" },
          { value: "3", label: "3廳", trigger: "isPetAllowed" },
          { value: "4", label: "4廳", trigger: "isPetAllowed" },
          { value: "0", label: "共用廳", trigger: "isPetAllowed" }
        ]
      },

      // toggle
      {
        //
        id: "isPetAllowed",
        message: "你會唔會養貓😺🐶豿呢？",
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
          { value: "false", label: "唔需要", trigger: "getLeasingPeriod" },
          { value: "true", label: "一定要", trigger: "getLeasingPeriod" }
        ]
      },
      {
        id: "getLeasingPeriod",
        message: "你打算租幾耐 (月)？",
        trigger: "getLeasingPeriodInput"
      },
      {
        id: "getLeasingPeriodInput",
        options: [
          { value: "24", label: "24月", trigger: "getRentBudgetMax" },
          { value: "12", label: "12月", trigger: "getRentBudgetMax" },
          { value: "6", label: "6月", trigger: "getRentBudgetMax" },
          { value: "2", label: "2月", trigger: "getRentBudgetMax" },
          { value: "4", label: "4月", trigger: "getRentBudgetMax" }
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
        inputType: "number",
        pattern: "[0-9]*",
        trigger: "getJobNature"
      },
      {
        id: "getJobNature",
        message:
          "為咗業主可以了解你多啲, 介唔介意話我知你嘅職業？（想保守私隱，可以填寫others)？",
        trigger: "getJobNatureInput"
      },
      {
        id: "getJobNatureInput",
        options: [
          { value: "1", label: "專業人士", trigger: "getIncome" },
          { value: "2", label: "公務員", trigger: "getIncome" },
          { value: "3", label: "私人機構", trigger: "getIncome" },
          { value: "4", label: "學生", trigger: "getIncome" },
          { value: "5", label: "其他", trigger: "getIncome" }
        ]
      },
      {
        id: "getIncome",
        message: "你嘅收入範圍係幾多？",
        trigger: "getIncomeInput"
      },
      {
        id: "getIncomeInput",
        options: [
          { value: "10", label: "under 10K", trigger: "getPhone" },
          { value: "15", label: "11k~15k", trigger: "getPhone" },
          { value: "20", label: "16k~20k", trigger: "getPhone" },
          { value: "25", label: "21k~25k", trigger: "getPhone" },
          { value: "30", label: "26k~30k", trigger: "getPhone" },
          { value: "35", label: "31k~35k", trigger: "getPhone" },
          { value: "40", label: "36k+", trigger: "getPhone" }
        ]
      },
      // Input Field
      {
        // getXXX
        id: "getPhone",

        message: ({ previousValue, steps }) => {
          return `OK, ${
            steps.getNameInput.value
          } 係我廣播你嘅房屋要求比所有地產agents之前，介唔介意留你電話號碼比我？（當你想對方聯絡你，你可以選擇share電話比佢，電話絕對保密）e.g. 96181448`;
        },
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
        inputType: "number",
        pattern: "[0-9]*",
        trigger: "getEmail"
      },
      // Input Field
      {
        // getXXX
        id: "getEmail",
        message:
          "最後，可唔可以要你email ？（電郵用途是幫你保存你的過往房屋記錄，下次登入時你可以方便翻查。我們會將密碼send去你電郵，電郵絕對保密，放心！）e.g. info@mr.house",
        trigger: "getEmailUserInput"
        // MISSED " validation = false"
      },
      {
        // on.FILLED
        id: "getEmailUserInput",
        user: true,
        inputType: "email",
        pattern:
          "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
        trigger: "review"
      },
      {
        id: "review",
        message: "請檢查以下你輸入啲資料：",
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
          {
            value: "false",
            label: "冇呀，謝謝！請帶我到下一步",
            trigger: "redirectMessage"
          },
          { value: "true", label: "我要更改資料", trigger: "update-yes" }
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
            value: "getNetSizeMinUserInput",
            label: "實用面積/呎",
            trigger: "update-getNetSizeMinUserInput"
          },
          {
            value: "getPartitionUserInput",
            label: "間隔",
            trigger: "update-getPartitionUserInput"
          },
          {
            value: "hasHomeHardwareBoolean",
            label: "需唔需要傢俬",
            trigger: "update-hasHomeHardwareBoolean"
          },
          {
            value: "isPetAllowedBoolean",
            label: "可養寵物",
            trigger: "update-isPetAllowedBoolean"
          },
          {
            value: "getLeasingPeriodInput",
            label: " 打算租幾耐 (月)",
            trigger: "update-getLeasingPeriodInput"
          },
          {
            value: "getJobNatureInput",
            label: "職業",
            trigger: "update-getJobNatureInput"
          },
          {
            value: "getNumOfPeopleLivingInput",
            label: "幾多人同住",
            trigger: "update-getNumOfPeopleLivingInput"
          },
          {
            value: "getIncomeInput",
            label: "收入範圍",
            trigger: "update-getIncomeInput"
          },

          {
            value: "getRentBudgetMax",
            label: "租金預算",
            trigger: "update-getRentBudgetMaxInput"
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
        id: "update-hasHomeHardwareBoolean",
        update: "hasHomeHardwareBoolean",
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
        id: "update-getNumOfPeopleLivingInput",
        update: "getNumOfPeopleLivingInput",
        trigger: "review"
      },
      // Update review
      // Update review
      {
        // update if previous ask no
        id: "update-getRentBudgetMaxInput",
        update: "getRentBudgetMaxInput",
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
        message:
          "太好了。 現在我們開始廣播你的請求比所有地產agents知。你會被接駁到一個新的聊天。",
        delay: 5000,
        trigger: "countDown"
      },
      {
        id: "countDown",
        message: "3...你準備好未？",
        delay: 2000,
        trigger: "countDown2"
      },
      {
        id: "countDown2",
        message: "2..接駁中",
        delay: 1000,
        trigger: "countDown1"
      },
      {
        id: "countDown1",
        message: "1 .",
        delay: 1000,
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
    let ms1 = GetName.concat(MainSteps);
    let conversation = ms1.concat(EndOfSteps);

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
            steps={conversation}
          />
        </ThemeProvider>
      </div>
    );
  }
}

export default AskChatbotRent;
