import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 2px solid var(--color-lightgrey);
  border-radius: 5rem;
  font-family: 'Fredoka One', cursive;
  font-size: 2.6rem;
  letter-spacing: 2px;
  padding: 1rem 4rem 1rem 1rem;
  margin-right: -3.5rem;
  outline: none;
  width: 100%;
  transition: all 0.2s ease-out;

  &::placeholder {
    color: var(--color-lightgrey);
  }

  &:focus {
    border: 2px solid var(--color-lightslategrey);

    &::placeholder {
      color: var(--color-lightslategrey);
    }
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
