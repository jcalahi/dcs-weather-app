import styled from 'styled-components';
import HeaderTitle from './HeaderTitle';
import HeaderIcon from './HeaderIcon';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

Header.HeaderTitle = HeaderTitle;
Header.HeaderIcon = HeaderIcon;

export default Header;
