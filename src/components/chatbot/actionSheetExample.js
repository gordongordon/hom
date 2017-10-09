/* eslint global-require: 0 */
import React from 'react';
import { ActionSheet, Button, Toast, Icon } from 'antd-mobile';
import PropTypes from 'prop-types';
//import ChatBot from '../react-simple-chatbot/dist/react-simple-chatbot';
import ChatBot from 'react-simple-chatbot';
import Chatpicker from './chatpicker'
import TabExample from './TabExample'


// fix touch to scroll background page on iOS
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

const iconList = [
  { icon: <img src="https://zos.alipayobjects.com/rmsportal/WmEzpOsElbbvgmrexFSH.png" alt="icon" />, title: '发送给朋友' },
  { icon: <img src="https://zos.alipayobjects.com/rmsportal/HssPJKvrjEByyVWJIFwl.png" alt="icon" />, title: '新浪微博' },
  { icon: <img src="https://zos.alipayobjects.com/rmsportal/HCGowLrLFMFglxRAKjWd.png" alt="icon" />, title: '生活圈' },
  { icon: <img src="https://zos.alipayobjects.com/rmsportal/LeZNKxCTkLHDWsjFfqqn.png" alt="icon" />, title: '微信好友' },
  { icon: <img src="https://zos.alipayobjects.com/rmsportal/YHHFcpGxlvQIqCAvZdbw.png" alt="icon" />, title: 'QQ' }
  //{ icon: <Icon type={require('./refresh.svg')} />, title: '刷新' },
//  { icon: <Icon type={require('./link.svg')} />, title: '链接' },
//  { icon: <Icon type={require('./complaints.svg')} />, title: '投诉' },
];


class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      role: '',
      price: '',
    };
  }

  componentWillMount() {
    const { steps} = this.props;
    const { name, role, price, building } = steps;

    this.setState({ name, role, price, building, });
  }

  render() {
    const { name, role, price, building } = this.state;
    return (
      <div style={{ width: '100%', fontSize: 34}}>
        <h3>資料將回覆客人</h3>
        name: {name.value} <br />
        尋找樓盤: 迎海 <br />
        你是 {role.value}<br />
        想買 {price.value} 萬 <br />
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


class ActionSheetExample extends React.Component {

    constructor() {
        super();
        this.state = {
          clicked: 'none',
          clicked1: 'none',
          clicked2: 'none',
        };
      }
  

     
    showActionSheet = () => {
        const BUTTONS = ['操作一', '操作二', '操作三', '删除', '取消'];
        ActionSheet.showActionSheetWithOptions({
          options: BUTTONS,
          cancelButtonIndex: BUTTONS.length - 1,
          destructiveButtonIndex: BUTTONS.length - 2,
          // title: '标题',
          message: '我是描述我是描述',
          maskClosable: true,
          'data-seed': 'logId',
          wrapProps,
        },
        (buttonIndex) => {
          this.setState({ clicked: BUTTONS[buttonIndex] });
        });
      }
      showShareActionSheet = () => {
        const icons = [...iconList];
        icons.length = 4;
        ActionSheet.showShareActionSheetWithOptions({
          options: icons,
          // title: '标题',
          message: '我是描述我是描述',
          className: 'my-action-sheet',
        },
        (buttonIndex) => {
          this.setState({ clicked1: buttonIndex > -1 ? icons[buttonIndex].title : 'cancel' });
          // also support Promise
          return new Promise((resolve) => {
            Toast.info('1000ms 后关闭');
            setTimeout(resolve, 1000);
          });
        });
      }
      showShareActionSheetMulpitleLine = () => {
        const icons = [[...iconList], [iconList[5], iconList[6], iconList[7]]];
        ActionSheet.showShareActionSheetWithOptions({
          options: icons,
          // title: '标题',
          message: '我是描述我是描述',
          className: 'my-action-sheet',
        },
        (buttonIndex, rowIndex) => {
          this.setState({ clicked2: buttonIndex > -1 ? icons[rowIndex][buttonIndex].title : 'cancel' });
        });
    }
      
    
    render() {
        

    return (
      <ChatBot
      headerTitle="Mr.House"
      hideSubmitButton='false'
      // hideBotAvatar="false"
      placeholder="your name"
      steps={[
    {  // welcome
       id : "welcome",
       message: "歡迎你今天怎麼樣?",
       trigger: "welcomeOptions"
    },
    {  // on.OPTION1..n
       id: "welcomeOptions",
       options : [
           { value: "mrhouse", label: "讓我介紹Mr.Houseee", trigger: "mrhouse"}, // Option1
           { value: "buy", label: "買房子", trigger: "buy"}  // Option2
          ]
    },
    {  // mrhouse
       id: "mrhouse",
       message: "讓我介紹Mr.Housee",
       trigger: "mrhouseOptions"  
    },
    {  //on.OPTION1 .. n
       id: "mrhouseOptions",
       options: [
           { value: "buy", label: "buy", trigger: "buy" },
           { value: "stop", label: "stop", trigger: "stop" }
          ]
    },

    {  // buy with on.NEXT
       id : "buy",
       message: "你準備找房子了嗎",
       trigger: "getBuilding"
    },

    {  // getBuilding
       id: 'getBuilding',
       message: "你可以選擇一個你有興趣購買的房子", 
       trigger: "getBuildingUserInput"
       // MISSED " validation = false"
    },
    {  // on.FILLED
       id: "getBuildingUserInput",
       user: true,
       trigger: "isBuyWithLease",
    },

    {  // isBuyWithLease
       id: "isBuyWithLease",
       message: "我可以賣買連租賃嗎?",
       trigger: "isBuyWithLeaseOptions"  
    },
    {  //on.OPTION1 .. n
       id: "isBuyWithLeaseOptions",
       options: [
           { value: "yes", label: "yes", trigger: "getNetSizeMin" },
           { value: "no", label: "no", trigger: "getNetSizeMin" }
          ]
    },

    {  // getNetSizeMin
        id: 'getNetSizeMin',
        message: "最少實用面積/呎?", 
        trigger: "getNetSizeMinUserInput"
        // MISSED " validation = false"
     },
     {  // on.FILLED
        id: "getNetSizeMinUserInput",
        user: true,
        trigger: "getPartition",
     },    
    

    // Input Field
    {  // getPartition
        id: 'getPartition',
        message: "間隔", 
        trigger: "getPartitionUserInput"
        // MISSED " validation = false"
     },
     {  // on.FILLED
        id: "getPartitionUserInput",
        user: true,
        trigger: "isPetAllowed",
     },    
     
    // toggle
    {  // 
        id: "isPetAllowed",
        message: "可養寵物嗎?",
        trigger: "isPetAllowedOptions"  
     },
     {  //on.OPTION1 .. n
        id: "isPetAllowedOptions",
        options: [
            { value: "yes", label: "yes", trigger: "getSalePrice" },
            { value: "no", label: "no", trigger: "getSalePrice" }
           ]
     },

         // Input Field
    {  // getXXX
        id: 'getSalePrice',
        message: "付出預算上限?", 
        trigger: "getSalePriceUserInput"
        // MISSED " validation = false"
     },
     {  // on.FILLED
        id: "getSalePriceUserInput",
        user: true,
        trigger: "getLastName",
     },  

         // Input Field
    {  // getXXX
        id: 'getLastName',
        message: "我可以有你的姓氏?", 
        trigger: "getLastNameUserInput"
        // MISSED " validation = false"
     },
     {  // on.FILLED
        id: "getLastNameUserInput",
        user: true,
        trigger: "getFirstName",
     },    

         // Input Field
    {  // getXXX
        id: 'getFirstName',
        message: "我可以有你的名字嗎?", 
        trigger: "getFirstNameUserInput"
        // MISSED " validation = false"
     },
     {  // on.FILLED
        id: "getFirstNameUserInput",
        user: true,
        trigger: "getEmail",
     },    
    // Input Field
    {  // getXXX
        id: 'getEmail',
        message: "我可以有你的電子郵件地址?", 
        trigger: "getEmailUserInput"
        // MISSED " validation = false"
     },
     {  // on.FILLED
        id: "getEmailUserInput",
        user: true,
        trigger: "getPhone",
     },   

    // Input Field
    {  // getXXX
        id: 'getPhone',
        message: "我可以有你的電話號碼?", 
        trigger: "getPhoneUserInput"
        // MISSED " validation = false"
     },
     {  // on.FILLED
        id: "getPhoneUserInput",
        user: true,
        trigger: "stop",
     },   

    {   // stop
        id: "stop",
        message: "stop",
        end: true
    }
  ]}


       
      />
    );
  }
}

export default ActionSheetExample;


//   render() {
//     return (<div className="actionSheetContainer">
//       <div style={{ margin: '0.15rem 0' }}>
//         <Button onClick={this.showActionSheet}>默认状态</Button>
//       </div>
//       <div style={{ margin: '0.15rem 0' }}>
//         <Button onClick={this.showShareActionSheet}>分享功能</Button>
//       </div>
//       <div style={{ margin: '0.15rem 0' }}>
//         <Button onClick={this.showShareActionSheetMulpitleLine}>带多行按钮的分享功能</Button>
//       </div>
//     </div>);
//   }
// }


// steps={[
//   {
//     id: '1',
//     message: '歡迎來到Mr House,請輸入名稱',
//     trigger: 'name',
//   },
//   {
//     id: 'name',
//     // component: (
//     //     <Chatpicker />
//     //  ),            
//     user: true,
//     trigger: '2',
//   },
//   {
//     id: '2',
//     message: '請選擇樓盤名稱',
//     trigger: '2b',
//   },
//   {
//     id: '2b',
//     component: (<div className="actionSheetContainer" style={{width: '16rem'}}>
// <div style={{ margin: '0.15rem 0' }}>
// <Button type="primary" onClick={this.showActionSheet}>默认状态</Button>
// </div>
// <div style={{ margin: '0.15rem 0' }}>
// <Button tyipe="ghost" onClick={this.showShareActionSheet}>分享功能</Button>
// </div>
// </div>),            
//     trigger: '3',
//   },
//   {
//     id: '3',
//     message: '你是？',
//     trigger: 'role',
//   },
//   {
//     id: 'role',
//     options: [
//       { value: '房東', label: '房東', trigger: '6' },
//       { value: '買家', label: '買家', trigger: '6' },
//       { value: '業主', label: '業主', trigger: '6' },
//       { value: '租客', label: '租客', trigger: '6' }
//     ],
//   },
//   {
//     id: '6',
//     message: '請選擇(房)間隔?',
//     trigger: '6b',
//   },
//   {
//     id: '6b',
//     options: [
//       { value: '開放式', label: '開放式', trigger: '5' },
//       { value: '0房', label: '0房', trigger: '5' },
//       { value: '1房', label: '1房', trigger: '5' },
//       { value: '2房', label: '2房', trigger: '5' },
//       { value: '3房', label: '3房', trigger: '5' },
//       { value: '4房', label: '4房', trigger: '5' },
//       { value: '5房', label: '5房', trigger: '5' },
//     ],
//   },
//   {
//     id: '5',
//     message: '想買多少萬?',
//     trigger: 'price',
//   },
//   {
//     id: 'price',
//     user: true,
//     trigger: '7',
//     validator: (value) => {
//       if (isNaN(value)) {
//         return 'value must be a number';
//       } else if (value < 0) {
//         return 'value must be positive';
//       } else if (value > 10000) {
//         return `${value}? Come on!`;
//       }

//       return true;
//     },
//   },
//   {
//     id: '7',
//     message: '以下是你的輸入請確認',
//     trigger: 'review',
//   },
//   {
//     id: 'review',
//     component: <Chatpicker />,
//     asMessage: true,
//     trigger: 'update',
//   },
//   {
//     id: 'update',
//     message: '請確認傳送?',
//     trigger: 'update-question',
//   },
//   {
//     id: 'update-question',
//     options: [
//       { value: 'yes', label: 'Yes', trigger: 'update-yes' },
//       { value: 'no', label: 'No', trigger: 'end-message' },
//     ],
//   },
//   {
//     id: 'update-yes',
//     message: 'What field would you like to update?',
//     trigger: 'update-fields',
//   },
//   {
//     id: 'update-fields',
//     options: [
//       { value: 'name', label: 'Name', trigger: 'update-name' },
//       { value: 'role', label: 'Role', trigger: 'update-role' },
//       { value: 'price', label: 'Price', trigger: 'update-price' },
//     ],
//   },
//   {
//     id: 'update-name',
//     update: 'name',
//     trigger: '7',
//   },
//   {
//     id: 'update-role',
//     update: 'role',
//     trigger: '7',
//   },
//   {
//     id: 'update-price',
//     update: 'price',
//     trigger: '7',
//   },
//   {
//     id: 'end-message',
//     message: 'Thanks! Your data was submitted successfully!',
//     end: true,
//   },
// ]}