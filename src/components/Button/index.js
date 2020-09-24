import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 100%;

  & > button:first-child {
    margin-bottom: 5px;
  }
`;

const Button = styled.button`
  background-color: #fff;
  border: 1px solid slategray;
  border-radius: 5rem;
  font-size: 1.2rem;
  padding: 5px 8px;
  transition: all 0.2s ease-out;

  &:hover {
    border: 1px solid deepskyblue;
    color: deepskyblue;
  }

  &:active {
    transform: translateY(5px);
  }
`;

Button.Group = ButtonGroup;

export default Button;
