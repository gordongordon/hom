import styled, {keyframes} from 'styled-components';

const freshing = keyframes`
0% {
  border: 3px solid #ffb3b3;
}
50% {
  border: 3px solid #000;
}

100% {
  border: 3px solid #ffb3b3;
}
`;

const ChatStepContainer = styled.div`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin: 0 10px 10px 10px;
`;

// background: #fff;
// border-radius: 10px;
// box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;
// display: flex;
// justify-content: center;
// margin: 0 10px 10px 10px;
// padding: 10px;
// animation: ${freshing} 3s linear infinite;


export default ChatStepContainer;
