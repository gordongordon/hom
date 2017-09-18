import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import ChatBot from '../react-simple-chatbot/dist/react-simple-chatbot';
import ChatBot from 'react-simple-chatbot';
import Chatpicker from './chatpicker'
import TabExample from './TabExample'

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
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


class FormSaleChatbot extends Component {
  render() {
     
    
    

    return (
      <ChatBot
      headerTitle="Mr.House"
      hideSubmitButton="false"
      // hideBotAvatar="false"

        steps={[
          {
            id: '1',
            message: '歡迎來到Mr House,請輸入名稱',
            trigger: 'name',
          },
          {
            id: 'name',
            // component: (
            //     <Chatpicker />
            //  ),            
            user: true,
            trigger: '2',
          },
          {
            id: '2',
            message: '請輸入樓盤名稱',
            trigger: '2b',
          },
          {
            id: '2b',
            component: (
                 <Chatpicker />
            ),            
            trigger: '3',
          },
          {
            id: '3',
            message: '請選擇其中一個不需要輸入?',
            trigger: 'role',
          },
          {
            id: 'role',
            options: [
              { value: '房東', label: '房東', trigger: '6' },
              { value: '買家', label: '買家', trigger: '6' },
              { value: '業主', label: '業主', trigger: '6' },
              { value: '租客', label: '租客', trigger: '6' }
            ],
          },
          {
            id: '6',
            message: '請選擇 房?',
            trigger: '6b',
          },
          {
            id: '6b',
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
        ]}
      />
    );
  }
}

export default FormSaleChatbot;
