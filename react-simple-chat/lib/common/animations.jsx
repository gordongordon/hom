import { keyframes } from 'styled-components';

// animation: show 1.5s;
// animation-name: show;
// animation-duration: 1.5s;
// animation-timing-function: initial;
// animation-delay: initial;
// animation-iteration-count: initial;
// animation-direction: initial;
// animation-fill-mode: initial;
// animation-play-state: initial;

const loading = keyframes`
  0% { opacity: .2; }
  20% { opacity: 1; }
  100% { opacity: .2; }
`;

const scale = keyframes`
  100% { transform: scale(1); }
`;

// const scale = keyframes`
// 0%   { opacity: 0; }
// 100% { opacity: 1;
//        transform: scale(1);   
//  }
// `;

// const scale = keyframes`
// animation-name : show;
// animation-duration: 1.5s;
// animation-timing-function: initial;
// animation-delay: initial;
// animation-iteration-count: initial;
// animation-direction: initial;
// animation-fill-mode: initial;
// animation-play-state: initial;
// `;

const invalidInput = keyframes`
  25% { transform: rotate(-1deg); }
  100% { transform: rotate(1deg); }
`;

export { loading, scale, invalidInput };
