import React from 'react';
import { bool, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Search from '../../components/Search';

const { SearchInput, SearchButton } = Search;

function SearchBox({ placeholder }) {
  return (
    <form>
      <Search id="search-input">
        <SearchInput id="search-input" placeholder={placeholder} />
        <SearchButton>
          <FontAwesomeIcon icon={faSearch} size="2x" />
        </SearchButton>
      </Search>
    </form>
  );
}

SearchBox.propTypes = {
  loading: bool,
  placeholder: string
};

SearchBox.defaultProps = {
  placeholder: 'Enter a text here',
  loading: false
};

export default SearchBox;