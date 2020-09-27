import styled from 'styled-components';

import Panel from './Panel';
import { respondTo } from '../../utils';

const Container = styled.div`
  margin-top: 1.5rem;

  ${respondTo.xxs`padding: 0 1rem;`}
  ${respondTo.sm`padding: 0 2rem;`}
  ${respondTo.lg`padding: 0 20rem;`}
`;

Container.Panel = Panel;

export default Container;
