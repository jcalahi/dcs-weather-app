import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`;

export default Grid;
