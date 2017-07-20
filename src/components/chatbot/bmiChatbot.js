import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from '../react-simple-chatbot/dist/react-simple-chatbot';

const BMI = (props) => {
  const { steps } = props;
  const height = steps.height.value;
  const weight = steps.weight.value;
  const bmi = Number(((weight / (height * height)) * 10000).toFixed(1));
  let result = 'Underweight';

  if (bmi >= 18.5 && bmi < 25) {
    result = 'Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
    result = 'Overweight';
  } else if (bmi >= 30) {
    result = 'Obesity';
  }

  return (
    <div className="test">
      Your BMI is {bmi} ({result})
    </div>
  );
};

BMI.propTypes = {
  steps: PropTypes.object,
};

BMI.defaultProps = {
  steps: undefined,
};

class BMIChatbot extends Component {
  render() {
    function validator(value) {
      if (isNaN(value)) {
        return 'value should be a number';
      } else if (value < 0) {
        return 'value should be positive';
      }

      return true;
    }

    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Welcome to react chatbot!',
            trigger: '2',
          },
          {
            id: '2',
            message: 'Let\'s calculate your BMI (Body Mass Index)',
            trigger: '3',
          },
          {
            id: '3',
            message: 'Please type your height (cm)',
            trigger: 'height',
          },
          {
            id: 'height',
            user: true,
            trigger: '4',
            validator,
          },
          {
            id: '4',
            message: 'Please type your weight (kg)',
            trigger: 'weight',
          },
          {
            id: 'weight',
            user: true,
            trigger: '5',
            validator,
          },
          {
            id: '5',
            message: 'Thanks! Check out your BMI',
            trigger: '6',
          },
          {
            id: '6',
            component: <BMI />,
            end: true,
          },
        ]}
      />
    );
  }
}

export default BMIChatbot;
