import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const StyledHeaderTitle = styled.div`
  width: 85%;

  & .header {
    margin-bottom: 2.5rem;

    &__title {
      font-family: 'Fredoka One', sans-serif;
      font-size: 1.8rem;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
    }

    &__subTitle {
      font-family: Raleway, sans-serif;
      font-size: 1.2rem;
    }
  }
`;

function HeaderTitle({ title, subTitle }) {
  return (
    <StyledHeaderTitle className="header">
      <h2 className="header__title">{title}</h2>
      <p className="header__subTitle">{subTitle}</p>
    </StyledHeaderTitle>
  );
}

HeaderTitle.propTypes = {
  title: string,
  subTitle: string
}

export default HeaderTitle;
