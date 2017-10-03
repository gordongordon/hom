import React, { Component } from "react";
import PropTypes from "prop-types";
//import ChatBot from '../react-simple-chatbot/dist/react-simple-chatbot';
import ChatBot from "react-simple-chatbot";
import Chatpicker from "./chatpicker";
//import TabExample from './TabExample'
import MobxStore from "mobxStore";
import views from "views";

import { ThemeProvider } from "styled-components";

// Pepsi
const theme = {
  background: "#F2f2f2",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#ED1B24",
  headerFontColor: "#fff",
  botBubbleColor: "#002F6F",
  botFontColor: "#fff",
  userBubbleColor: "#0174C9",
  userFontColor: "#fff"
};

// Double Cove
// const theme = {
//   background: '#FAFAFA',
//   fontFamily: 'Helvetica Neue',
//   headerBgColor: '#000',
//   headerFontColor: '#FF8000',
//   botBubbleColor: '#e6e6e6',
//   botFontColor: '#000',
//   userBubbleColor: '#FF8000',
//   userFontColor: '#fff',
// };

// Apple
// const theme = {
//   background: '#FAFAFA',
//   fontFamily: 'Helvetica Neue',
//   headerBgColor: '#32302F',
//   headerFontColor: '#fff',
//   botBubbleColor: '#e6e6e6',
//   botFontColor: '#000',
//   userBubbleColor: '#F2f2f2',
//   userFontColor: '#000',
// };

// const theme = {
//   background: '#F2f2f2',
//   fontFamily: 'Helvetica Neue',
//   headerBgColor: '#71B238',
//   headerFontColor: '#A6CB45',
//   botBubbleColor: '#e6e6e6',
//   botFontColor: '#000',
//   userBubbleColor: '#A6CB45',
//   userFontColor: '#000',
// };

// Other for lala
// const theme = {
//   background: '#F2f2f2',
//   fontFamily: 'Helvetica Neue',
//   headerBgColor: '#F55869',
//   headerFontColor: '#FECEA8',
//   botBubbleColor: '#e6e6e6',
//   botFontColor: '#000',
//   userBubbleColor: '#FEFCD7',
//   userFontColor: '#000',
// };

// Final Pink
// const theme = {
//   background: '#F2f2f2',
//   fontFamily: 'Helvetica Neue',
//   headerBgColor: '#F55869',
//   headerFontColor: '#FECEA8',
//   botBubbleColor: '#e6e6e6',
//   botFontColor: '#000',
//   userBubbleColor: '#FECEA8',
//   userFontColor: '#000',
// };

// Green
// const theme = {
//   background: '#F2f2f2',
//   fontFamily: 'Helvetica Neue',
//   headerBgColor: '#F55869',
//   headerFontColor: '#000',
//   botBubbleColor: '#e6e6e6',
//   botFontColor: '#000',
//   userBubbleColor: '#fecea8',
//   userFontColor: '#000',
// };

// Blue
// const theme = {
//   background: '#f5f8fb',
//   fontFamily: 'Helvetica Neue',
//   headerBgColor: '#FFD200',
//   headerFontColor: '#000',
//   botBubbleColor: '#FFE552',
//   botFontColor: '#000',
//   userBubbleColor: '#fff',
//   userFontColor: '#4a4a4a',
// };

// Gold Color
// const theme = {
//   background: '#f5f8fb',
//   fontFamily: 'Helvetica Neue',
//   headerBgColor: '#FFD200',
//   headerFontColor: '#000',
//   botBubbleColor: '#FFE552',
//   botFontColor: '#000',
//   userBubbleColor: '#fff',
//   userFontColor: '#4a4a4a',
// };

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      role: "",
      price: "",
      building: ""
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, role, price, building, room } = steps;

    this.setState({ name, role, price, building, room });
  }

  render() {
    const { name, role, price, building, room } = this.state;
    return (
      <div style={{ width: "100%", fontSize: 34 }}>
        <h3>資料將回覆客人</h3>
        名稱: {name.value} <br />
        你是 {role.value}
        <br />
        尋找樓盤: {building.value} <br />
        間隔(房): {room.value} <br />
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

//class FormSaleChatbot extends Component {

//  render() {

//return (
const FormSaleChatbot = () => (
  <ThemeProvider theme={theme}>
    <ChatBot
      headerTitle="Mr.House"
      //floating="true"
      //hideSubmitButton="false"
      cache="true"
      hideSubmitButton={false}
      //hideBotAvatar="false"

      steps={[
        {
          id: "0",
          message: "歡迎來到 Mr.House! 請選擇任何一個?",
          trigger: "introduction"
        },
        {
          id: "introduction",
          options: [
            { value: "mrhouse", label: "了解更多Mr.House", trigger: "mrhouse" },
            { value: "startForm", label: "尋找物業", trigger: "startForm" },
            { value: "askForListing", label: "放物業", trigger: "startForm" },
            { value: "other", label: "其他", trigger: "other" }
          ]
        },
        {
          id: "mrhouse",
          message: `你有冇試過上網搵樓盤?傳統網上搵到嘅樓盤資訊一定過時同唔齊全，`,
          trigger: "mrhouse2"
        },
        {
          id: "mrhouse2",
          message: `令你失去信心同預算。Mr.House 肯定係! 最新最齊嘅樓盤資訊一定唔係互聯網!`,
          delay: 500,
          trigger: "mrhouse3"
        },
        {
          id: "mrhouse3",
          message: `全部都係地產代理手上! Mr.House 幫你嘅係! 將你需要即時廣傳比所有地產代理知道等佢即時回覆!`,
          delay: 500,
          trigger: "mrhouse4"
        },
        {
          id: "mrhouse4",
          message: `記住Mr.House 搵到嘅係/即時顯示係！ 啱你心水樓盤係由全港唔同嘅地產代理即時(提供/價錢)！所以先可以一次集齊最新最齊啱你心水樓盤！搵樓  Mr.House`,
          delay: 500,
          trigger: "startForm"
        },
        {
          id: "startForm",
          message: "讓我們開始尋找房子! 開始回答我的問題，然後才能幫忙! 只需一分鐘!",
          trigger: "userType"
        },
        {
          id: "userType",
          message: "什麼角色最適合你？",
          trigger: "role"
        },
        {
          id: "role",
          options: [
            { value: "房東", label: "房東", trigger: "2" },
            { value: "買家", label: "買家", trigger: "2" },
            { value: "業主", label: "業主", trigger: "2" },
            { value: "租客", label: "租客", trigger: "2" }
          ]
        },
        {
          id: "2",
          message: "請選擇樓盤名稱",
          trigger: "building"
        },
        {
          id: "building",
          component: <Chatpicker />,
          waitAction: true,
          trigger: "6"
        },
        {
          id: "6",
          message: "請選擇({previousValue})間隔?",
          trigger: "room"
        },
        {
          id: "room",
          options: [
            { value: "開放式", label: "開放式", trigger: "5" },
            { value: "1房", label: "1房", trigger: "5" },
            { value: "2房", label: "2房", trigger: "5" },
            { value: "3房", label: "3房", trigger: "5" },
            { value: "4房", label: "4房", trigger: "5" },
            { value: "5房", label: "5房", trigger: "5" },
            { value: "other", label: "其他", trigger: "other" }
          ]
        },
        {
          id: "5",
          message: "想買多少萬?",
          trigger: "price"
        },
        {
          id: "price",
          user: true,
          trigger: "name",
          validator: value => {
            if (isNaN(value)) {
              return "value must be a number";
            } else if (value < 0) {
              return "value must be positive";
            } else if (value > 10000) {
              return `${value}? Come on!`;
            }

            return true;
          }
        },
        {
          id: "name",
          message: "你的姓氏是什麼",
          trigger: "lastName"
        },
        {
          id: "lastName",
          user: true,
          trigger: "firstNameMessage"
        },
        {
          id: "firstNameMessage",
          message: "你的名字是什麼",
          trigger: "firstName"
        },
        {
          id: "firstName",
          user: true,
          trigger: "phoneMessage"
        },
        {
          id: "phoneMessage",
          message: "你的Phone什麼",
          trigger: "phone"
        },
        {
          id: "phone",
          user: true,
          trigger: "reviewMessage"
        },
        {
          id: "reviewMessage",
          message: "以下是你的輸入請確認",
          trigger: "review"
        },
        {
          id: "review",
          component: <Review />,
          asMessage: true,
          trigger: "update"
        },
        {
          id: "update",
          message: "請確認傳送?",
          trigger: "update-question"
        },
        {
          id: "update-question",
          options: [
            { value: "yes", label: "Yes", trigger: "update-yes" },
            { value: "no", label: "No", trigger: "end-message" },
            { value: "matching", label: "matching", trigger: "matching" }
          ]
        },
        {
          id: "update-yes",
          message: "What field would you like to update?",
          trigger: "update-fields"
        },
        {
          id: "update-fields",
          options: [
            { value: "name", label: "Name", trigger: "update-name" },
            { value: "role", label: "Role", trigger: "update-role" },
            { value: "price", label: "Price", trigger: "update-price" }
          ]
        },
        {
          id: "update-name",
          update: "name",
          trigger: "7"
        },
        {
          id: "update-role",
          update: "role",
          trigger: "7"
        },
        {
          id: "update-price",
          update: "price",
          trigger: "7"
        },
        {
          id: "end-message",
          message: "Thanks! Your data was submitted successfully!",
          end: true
        },
        {
          id: "matching",
          component: (
            <button onClick={() => MobxStore.router.goTo(views.list)}>
              Matching
            </button>
          ),
          //            message: 'Thanks! Your data was submitted successfully!',
          end: true
        }
      ]}
    />
  </ThemeProvider>
);
//}
//}

export default FormSaleChatbot;
