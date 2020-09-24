import styled from 'styled-components';

const Text = styled.span`
  ${props => props.primary && `font-family: 'Fredoka One'`};
  ${props => props.secondary && `font-family: 'Raleway'`};
  ${props => props.weight && `font-weight: ${props.weight}`};
  ${props => props.size && `font-size: ${props.size}`};
`;

export default Text;
