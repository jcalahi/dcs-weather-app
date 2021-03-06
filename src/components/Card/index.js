import styled from 'styled-components';

import Header from './Header';
import Body from './Body';
import Overlay from './Overlay';

const Card = styled.div`
  border: 1px solid grey;
  padding: 1rem;
  position: relative;
  transition: all 0.2s ease-out;

  ${(props) =>
    props.hover &&
    `&:hover {
      box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
      transform: translateY(-10px);
      .overlay {
        opacity: 0.8;
        top: 33%;
      }
    }`}
`;

Card.Header = Header;
Card.Body = Body;
Card.Overlay = Overlay;

export default Card;
