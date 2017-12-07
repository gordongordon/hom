import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';
import Generic from '../../lib/mrui/index';
import Toggle from '../../lib/mrui/Toggle';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'You can add custom components',
    trigger: '2',
  },
  {
    // on.FILLED
    id: '2',
    // component: <Key placeholder="96181448"/>,
    // component: <Chatpicker />,
    // component: <Slick />,
    //component: <Generic />,
    component: <Toggle />,
    // component: <Generic className="cumi Generic"/>,

    waitAction: true,
    trigger: "3"
  },
  {
    id: '3',
    message: 'Hi {previousValue}, Hello World',
    end: true,
  },
];


// const ThemedExample = () => (
//   <ThemeProvider theme={otherFontTheme}>
//     <ChatBot steps={steps} />
//   </ThemeProvider>

// );

const ThemedExample = () => (
  <Toggle />
);

export default ThemedExample;
