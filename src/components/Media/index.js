import styled from 'styled-components';

import MediaHeader from './MediaHeader';
import MediaHeaderIcon from './MediaHeaderIcon';
import MediaContent from './MediaContent';

const Media = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

Media.MediaHeader = MediaHeader;
Media.MediaHeaderIcon = MediaHeaderIcon;
Media.MediaContent = MediaContent;

export default Media;
