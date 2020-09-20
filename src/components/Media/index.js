import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solid } from "@fortawesome/free-solid-svg-icons";
import { faStar as regular } from "@fortawesome/free-regular-svg-icons";

const Header = ({ primary, tertiary }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1.5rem 0' }}>
        <h2 style={{ fontSize: '4rem', margin: '1.5rem 0' }}>{primary}</h2>
        <span style={{ alignSelf: 'center' }}>
          <FontAwesomeIcon icon={regular} size="2x" />
        </span>
      </div>
      <h4 style={{ fontSize: '2rem' }}>{tertiary}</h4>
    </div>
  );
};

const Body = styled.div``;
const Content = styled.div``;

const Media = styled.div`
`;

Media.MediaHeader = Header;
Media.MediaBody = Body;
Media.MediaContent = Content;

export default Media;
