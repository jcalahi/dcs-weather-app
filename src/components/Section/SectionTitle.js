import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-size: 3.5rem;
  position: relative;
  padding: 0 2.5rem;
  color: var(--color-lightslategrey);
  margin: 0;

  & strong {
    z-index: 2;
    background: #fff;
    padding: 0 8px;
    position: relative;
    vertical-align: middle;
  }

  & span {
    font-size: 2.5rem;
    color: slategrey;
    margin-left: 1rem;
  }

  &:after {
    content: '';
    z-index: 1;
    bottom: 50%;
    margin-bottom: -5px;
    height: 2px;
    left: 0;
    right: 0;
    background: var(--color-lightgrey);
    position: absolute;
  }
`;

function SectionTitle(props) {
  return (
    <StyledH2>
      <strong>{props.text}</strong>
      {/* <span>({props.count})</span> */}
    </StyledH2>
  );
}

export default SectionTitle;
