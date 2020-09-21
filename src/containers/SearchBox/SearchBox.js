import React, { useContext, useEffect } from 'react';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
// context
import WeatherContext from '../../context/WeatherContext';
// hooks
import useWeather from '../../hooks/useWeather';
// components
import Search from '../../components/Search';

const { SearchInput, SearchButton } = Search;

function SearchBox(props) {
  const { id, placeholder } = props;
  const [weather, isFetchingCurrent, fetchCurrent] = useWeather();
  const [, dispatch] = useContext(WeatherContext.WeatherStateContext);

  useEffect(() => {
    dispatch({ type: 'FETCH_WEATHER', weather });
  }, [weather, dispatch]);

  const handleSubmit = (e) => {
    const searchStr = e.target[0].value;
    e.preventDefault();
    fetchCurrent(searchStr);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Search id={id}>
        <SearchInput id={id} placeholder={placeholder} />
        <SearchButton>
          <FontAwesomeIcon icon={isFetchingCurrent ? faSpinner : faSearch} size="2x" spin={isFetchingCurrent} />
        </SearchButton>
      </Search>
    </form>
  );
}

SearchBox.propTypes = {
  id: string,
  placeholder: string
};

SearchBox.defaultProps = {
  id: 'search-input',
  placeholder: 'Enter a text here',
};

SearchBox.whyDidYouRender = true;

export default SearchBox;