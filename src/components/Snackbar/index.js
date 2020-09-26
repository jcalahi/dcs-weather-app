import styled, { css, keyframes } from 'styled-components';

const fadein = keyframes`
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
`;

const fadeout = keyframes`
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
`;

const animation = (props) => css`
  animation: ${fadein} 0.5s, ${fadeout} 0.5s 2.5s;
`;


const Snackbar = styled.div`
  visibility: hidden;
  min-width: 25rem;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1.6rem;
  position: fixed;
  z-index: 1;
  top: 3%;
  right: 2%;
  opacity: 0.8;

  ${(props) => props.show && (`visibility: visible; animation: ${animation};`)}
`;

export default Snackbar;
