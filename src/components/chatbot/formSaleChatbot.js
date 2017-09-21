import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import ChatBot from '../react-simple-chatbot/dist/react-simple-chatbot';
import ChatBot from 'react-simple-chatbot';
import Chatpicker from './chatpicker';
//import TabExample from './TabExample'
import MobxStore from 'mobxStore';
import views from 'views';

import { ThemeProvider } from 'styled-components';


// Pepsi
const theme = {
  background: '#F2f2f2',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#ED1B24',
  headerFontColor: '#fff',
  botBubbleColor: '#002F6F',
  botFontColor: '#fff',
  userBubbleColor: '#0174C9',
  userFontColor: '#fff',
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
      name: '',
      role: '',
      price: '',
      building: ''
    };
  }

  componentWillMount() {
    const { steps} = this.props;
    const { name, role, price, building, room } = steps;

    this.setState({ name, role, price, building, room});
  }

  render() {
    const { name, role, price, building , room} = this.state;
    return (
      <div style={{ width: '100%', fontSize: 34}}>
        <h3>資料將回覆客人</h3>
        名稱: {name.value} <br />
        你是 {role.value}<br />
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
      hideSubmitButton="false"
      cache="true"
      //hideBotAvatar="false"

        steps={[
          {
            id: '1',
            message: 'a歡迎來到Mr House,請輸入名稱',
            trigger: 'name',
          },
          {
            id: 'name',
            // component: (
            //     <Chatpicker />
            //  ),            
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: '你是 {previousValue}？',
            trigger: 'role',
          },
          {
            id: 'role',
            options: [
              { value: '房東', label: '房東', trigger: '2' },
              { value: '買家', label: '買家', trigger: '2' },
              { value: '業主', label: '業主', trigger: '2' },
              { value: '租客', label: '租客', trigger: '2' }
            ],
          },
          {
            id: '2',
            message: '請選擇樓盤名稱',
            trigger: 'building',
          },
          {
            id: 'building',
            component: (
                 <Chatpicker />
            ),            
            waitAction: true,
            trigger: '6',
          },
          {
            id: '6',
            message: '請選擇(房){previousValue}間隔?',
            trigger: 'room',
          },
          {
            id: 'room',
            options: [
              { value: '開放式', label: '開放式', trigger: '5' },
              { value: '0房', label: '0房', trigger: '5' },
              { value: '1房', label: '1房', trigger: '5' },
              { value: '2房', label: '2房', trigger: '5' },
              { value: '3房', label: '3房', trigger: '5' },
              { value: '4房', label: '4房', trigger: '5' },
              { value: '5房', label: '5房', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: '想買多少萬?',
            trigger: 'price',
          },
          {
            id: 'price',
            user: true,
            trigger: '7',
            validator: (value) => {
              if (isNaN(value)) {
                return 'value must be a number';
              } else if (value < 0) {
                return 'value must be positive';
              } else if (value > 10000) {
                return `${value}? Come on!`;
              }

              return true;
            },
          },
          {
            id: '7',
            message: '以下是你的輸入請確認',
            trigger: 'review',
          },
          {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: 'update',
          },
          {
            id: 'update',
            message: '請確認傳送?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'update-yes' },
              { value: 'no', label: 'No', trigger: 'end-message' },
              { value: 'matching', label: 'matching', trigger: 'matching' },
            ],
          },
          {
            id: 'update-yes',
            message: 'What field would you like to update?',
            trigger: 'update-fields',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'name', label: 'Name', trigger: 'update-name' },
              { value: 'role', label: 'Role', trigger: 'update-role' },
              { value: 'price', label: 'Price', trigger: 'update-price' },
            ],
          },
          {
            id: 'update-name',
            update: 'name',
            trigger: '7',
          },
          {
            id: 'update-role',
            update: 'role',
            trigger: '7',
          },
          {
            id: 'update-price',
            update: 'price',
            trigger: '7',
          },
          {
            id: 'end-message',
            message: 'Thanks! Your data was submitted successfully!',
            end: true,
          },
          {
            id: 'matching',
            component : (
              <button onClick={ () => MobxStore.router.goTo( views.list ) }>Matching</button>
            ),
//            message: 'Thanks! Your data was submitted successfully!',
            end: true,
          },
        ]}
      />
      </ThemeProvider>      
      
    );
  //}
//}

export default FormSaleChatbot;
