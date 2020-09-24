import styled from 'styled-components';

const Overlay = styled.div`
  background: #fff;
  padding: 0 1rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  top: 100%;
  transition: all 0.2s ease-out;
`;

export default Overlay;
