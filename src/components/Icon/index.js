import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled(FontAwesomeIcon)`
  &&& {
    cursor: 'pointer';
    ${props => props.color && `color: ${props.color}`};
  }
`;

export default Icon;
