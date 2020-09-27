import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

const Page404 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function PageNotFound() {
  return (
    <Page404>
      <Text size="4rem" primary>
        Oopps!! 404, Page not found
      </Text>
    </Page404>
  );
}

export default PageNotFound;
