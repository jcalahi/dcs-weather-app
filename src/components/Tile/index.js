import styled from 'styled-components';

import TileGroup from './TileGroup';
import TileBody from './TileBody';

const Tile = styled.div`
  display: inline-block;
`;

Tile.Group = TileGroup;
Tile.Body = TileBody;

export default Tile;
