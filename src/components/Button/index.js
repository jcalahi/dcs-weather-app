import styled from 'styled-components';

const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 100%;

  & > button:first-child {
    margin-bottom: 8px;
  }
`;

const Button = styled.button`
  background-color: #fff;
  border: 2px solid grey;
  border-radius: 2rem;
  padding: 6px 10px;
  transition: all 0.2s ease-out;

  &:hover {
    cursor: pointer;
    border: 2px solid lightseagreen;
    color: lightseagreen;
  }

  &:active {
    transform: translateY(5px);
  }

  &:focus {
    outline: none;
  }
`;

Button.Group = ButtonGroup;
Button.Icon = ButtonIcon;

export default Button;
