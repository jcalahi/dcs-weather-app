import React from 'react';
import styled from 'styled-components';
import { string, element } from 'prop-types';

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const H2 = styled.h2`
  font-size: 4rem;
  margin: 1.5rem 0;
`;

const H4 = styled.h4`
  font-size: 2rem;
  margin: 1.5rem 0;
`;

function MediaHeader({ primaryText, secondaryText, extra }) {
  return (
    <>
      <FlexContainer>
        <H2>{primaryText}</H2>
        {extra}
      </FlexContainer>
      <H4>{secondaryText}</H4>
    </>
  );
}

MediaHeader.propTypes = {
  primaryText: string,
  secondaryText: string,
  extra: element,
};

export default MediaHeader;
