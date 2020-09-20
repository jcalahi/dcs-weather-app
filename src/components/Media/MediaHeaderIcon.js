import React from 'react';
import styled from 'styled-components';
import { func, object } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Span = styled.span`
  align-self: center;
`;

function MediaHeaderIcon({ onIconClick, icon }) {
  return (
    <Span onClick={onIconClick}>
      <FontAwesomeIcon icon={icon} size="2x" />
    </Span>
  );
}

MediaHeaderIcon.propTypes = {
  onIconClick: func,
  icon: object
};

MediaHeaderIcon.defaultProps = {
  onIconClick: () => {}
};

export default MediaHeaderIcon;
