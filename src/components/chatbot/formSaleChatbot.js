import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import ChatBot from '../react-simple-chatbot/dist/react-simple-chatbot';
import ChatBot from 'react-simple-chatbot';
import Chatpicker from './chatpicker'

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
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: '100%', fontSize: 34}}>
        <h3>資料將回覆客人</h3>
        尋找樓盤: {name.value} <br />
        你是 {gender.value}<br />
        想買 {age.value} 萬 <br />
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
      hideBotAvatar="false"

        steps={[
          {
            id: '1',
            message: '歡迎來到Mr House,請輸入樓盤名稱',
            // component: (
            //    <Chatpicker/>
            // ),            
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: '請選擇其中一個不需要輸入?',
            trigger: 'gender',
          },
          {
            id: 'gender',
            options: [
              { value: '房東', label: '房東', trigger: '5' },
              { value: '買家', label: '買家', trigger: '5' },
              { value: '業主', label: '業主', trigger: '5' },
              { value: '租客', label: '租客', trigger: '5' },
              { value: 'aa', label: 'aa', trigger: '5' },
              { value: 'bb', label: 'bb', trigger: '5' },
              { value: 'cc', label: 'cc', trigger: '5' },
              { value: 'dd', label: 'dd', trigger: '5' },
              { value: 'ee', label: 'ee', trigger: '5' },
              { value: 'ff', label: 'ff', trigger: '5' },
              { value: 'gg', label: 'gg', trigger: '5' },
              { value: 'hh', label: 'hh', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: '想買多少萬?',
            trigger: 'age',
          },
          {
            id: 'age',
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
              { value: 'gender', label: 'Gender', trigger: 'update-gender' },
              { value: 'age', label: 'Age', trigger: 'update-age' },
            ],
          },
          {
            id: 'update-name',
            update: 'name',
            trigger: '7',
          },
          {
            id: 'update-gender',
            update: 'gender',
            trigger: '7',
          },
          {
            id: 'update-age',
            update: 'age',
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
