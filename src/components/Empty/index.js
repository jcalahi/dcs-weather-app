import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';
import Text from '../Text';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 14.25rem;

  & span {
    color: lightgrey;
  }
`;

function Empty({ text, size, icon, spin }) {
  return (
    <Container>
      <Icon icon={icon} size={size} spin={spin} />
      <Text size="2rem" secondary>
        {text}
      </Text>
    </Container>
  );
}

export default Empty;
