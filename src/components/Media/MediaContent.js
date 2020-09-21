import styled from 'styled-components';

const MediaContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 769px) {
    flex-basis: 50%;
  }

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export default MediaContent;
