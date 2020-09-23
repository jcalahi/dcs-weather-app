import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FavoriteIcon = styled(FontAwesomeIcon)`
  &&& {
    color: ${(props) => props.icon.prefix === 'fas' ? 'orange' : 'lightslategrey'};
  }
`;

export default FavoriteIcon;
