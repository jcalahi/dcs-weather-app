import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 2px solid var(--color-grey-dark-1);
  border-radius: 1.2rem;
  font-family: 'Fredoka One', cursive;
  font-size: 2.6rem;
  letter-spacing: 2px;
  padding: 1rem 4rem 1rem 1rem;
  margin-right: -3.5rem;
  outline: none;

  &::placeholder {
    color: var(--color-grey-dark-1);
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

const Search = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <label htmlFor={props.id}></label>
      {props.children}
    </div>
  );
};

Search.SearchInput = Input;
Search.SearchButton = Button;

export default Search;
