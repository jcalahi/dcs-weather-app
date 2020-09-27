import styled from 'styled-components';
import { respondTo } from '../../utils';

const Text = styled.span`
  ${(props) => props.primary && `font-family: 'Fredoka One'`};
  ${(props) => props.secondary && `font-family: 'Raleway'`};
  ${(props) => props.weight && `font-weight: ${props.weight}`};
  ${(props) => props.size && `font-size: ${props.size}`};

  ${(props) =>
    !props.size && props.primary && respondTo.xxs`font-size: 1.2rem;`};
  ${(props) =>
    !props.size && props.primary && respondTo.xs`font-size: 1.4rem;`};
  ${(props) =>
    !props.size && props.primary && respondTo.sm`font-size: 1.6rem;`};
  ${(props) => !props.size && props.primary && respondTo.md`font-size: 2rem;`};
  ${(props) =>
    !props.size && props.primary && respondTo.lg`font-size: 2.2rem;`};

  ${(props) =>
    !props.size && props.secondary && respondTo.xxs`font-size: 1.4rem;`};
  ${(props) =>
    !props.size && props.secondary && respondTo.xs`font-size: 1.6rem;`};
  ${(props) =>
    !props.size && props.secondary && respondTo.sm`font-size: 1.8rem;`};
  ${(props) =>
    !props.size && props.secondary && respondTo.md`font-size: 2rem;`};
  ${(props) =>
    !props.size && props.secondary && respondTo.lg`font-size: 2.4rem;`};
`;

export default Text;
