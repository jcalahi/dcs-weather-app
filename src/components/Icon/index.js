import React from 'react';
import { bool, string, element, func } from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledSpan = styled.span`
  display: inline-block;

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

Icon.propTypes = {
  color: string,
  icon: element,
  size: string,
  onIconClick: func,
  hover: bool,
  spin: bool
};

export default Icon;
