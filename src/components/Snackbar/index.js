import styled, { css, keyframes } from 'styled-components';

const Snackbar = styled.div`
  background-color: #fffaf3;
  box-shadow: 0 0 0 1px #c9ba9b inset, 0 0 0 0 transparent;
  display: none;
  color: #573a08;
  padding: 1.6rem;
  position: fixed;
  top: 3%;
  right: 2%;
  width: 35rem;
  width: 35rem;

  ${(props) => props.show && `display: flex;`}
`;

export default Snackbar;
