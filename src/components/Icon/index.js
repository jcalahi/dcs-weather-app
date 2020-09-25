import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledSpan = styled.span`
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) => props.hover && `cursor: pointer`};
`;

function Icon({ color, icon, size, onIconClick, hover, spin }) {
  return (
    <StyledSpan color={color} onClick={onIconClick} hover={hover}>
      <FontAwesomeIcon icon={icon} size={size} spin={spin} />
    </StyledSpan>
  );
}

export default Icon;
