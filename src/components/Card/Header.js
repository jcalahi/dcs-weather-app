import React from 'react';
import { string, element } from 'prop-types';
import styled from 'styled-components';

import Text from '../Text';

const FlexHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

function Header({ title, subtitle, children }) {
  return (
    <FlexHeader>
      <div>
        <h2>
          <Text size="2rem" primary>
            {title}
          </Text>
        </h2>
        <p style={{ minHeight: '1.8rem' }}>
          <Text size="1.5rem" weight="200" secondary>
            {subtitle}
          </Text>
        </p>
      </div>
      {children}
    </FlexHeader>
  );
}

Header.propTypes = {
  title: string,
  subTitle: string,
  children: element
};

export default Header;
