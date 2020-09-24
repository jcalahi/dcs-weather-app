import React, { useContext, useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import debounce from 'lodash/debounce';
import Autosuggest from 'react-autosuggest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
// context
import WeatherContext from '../../context/WeatherContext';
// hooks
import { useHistory } from 'react-router-dom';
import useLookup from '../../hooks/useLookup';
import useWeather from '../../hooks/useWeather';
import { useGeoLocation } from '../../hooks/useGeoLocation';
// etc
import { ACTION_TYPES } from '../../constants';

const SearchWrapper = styled.div`
  margin: 0 auto;
  max-width: 60rem;
`;

const SearchContainer = styled.div`
  & {
    display: flex;

    & .react-autosuggest {
      &__container {
        flex: 1;
        position: relative;
      }

      &__input {
        border: 2px solid var(--color-lightgrey);
        font-family: 'Fredoka One', cursive;
        font-size: 2.5rem;
        letter-spacing: 2px;
        padding: 1rem 4rem 1rem 1rem;
        outline: none;
        transition: all 0.2s ease-in-out;
        width: 100%;

        &::placeholder {
          color: var(--color-lightgrey);
        }

        &:focus {
          border: 2px solid var(--color-lightslategrey);

          &::placeholder {
            color: var(--color-lightslategrey);
          }
        }

        &--open {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
      }

      &__suggestions {
        &-container {
          display: none;
        }

        &-container--open {
          display: block;
          position: absolute;
          top: 6rem;
          width: 100%;
          border: 2px solid var(--color-lightslategrey);
          background-color: #fff;
          font-family: Raleway;
          font-weight: 400;
          font-size: 1.6rem;
          z-index: 10;
        }

        &-list {
          margin: 0;
          padding: 0;
          list-style-type: none;
        }
      }

      &__suggestion {
        cursor: pointer;
        padding: 1rem 2rem;

        &--highlighted {
          background-color: var(--color-lightslategrey);
        }
      }
    }
  }
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: -3.5rem;
  z-index: 10;
  transition: all 0.2s ease-in-out;

  &:active {
    transform: translateY(5px);
  }

  &:focus {
    outline: none;
  }
`;

const SearchLocation = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;

  > span {
    font-family: Raleway;
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: underline;
  }
`;

function SearchBox() {
  const history = useHistory();
  const [, dispatch] = useContext(WeatherContext.WeatherStateContext);

  const [query, setQuery] = useState('');

  const { weather, isFetchingCurrent, fetchCurrent } = useWeather();
  const { results, isLookingUp, lookup } = useLookup();
  const { position, getPosition } = useGeoLocation();

  const debounceSearch = useMemo(() => debounce(lookup, 400), [lookup]);

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.FETCH_WEATHER, weather });
  }, [weather, dispatch]);

  useEffect(() => {
    if (position) {
      // we navigate to details page once
      // user allows location access
      history.push('/details');
      // fetchCurrent(position);
    }
  }, [position, history]);

  const handleChange = (e, { newValue }) => {
    setQuery(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchStr = e.target[0].value;
    // call API if input is not blank
    if (searchStr !== '') {
      fetchCurrent(searchStr);
    }
  };
  // populates the input value upon mouse/keyboard click
  const getSuggestionValue = (suggestion) => {
    return `${suggestion.name}, ${suggestion.region}, ${suggestion.country}`;
  };
  // renders the list of suggestions via dropdown container
  const renderSuggestion = (suggestion) => {
    return (
      <span>{`${suggestion.name}, ${suggestion.region}, ${suggestion.country}`}</span>
    );
  };

  const onSuggestionsFetchRequested = ({ reason, value }) => {
    if (reason === 'input-changed') {
      debounceSearch(value);
    } else {
      debounceSearch.cancel();
    }
  };
  // triggers api call when clicking a city inside select options
  // by default, this only works on keydown
  const onSuggestionSelected = (e, { suggestionValue }) => {
    if (e.type === 'click') {
      fetchCurrent(suggestionValue);
    }
  };

  return (
    <SearchWrapper>
      <form onSubmit={handleSubmit}>
        <SearchContainer>
          <Autosuggest
            focusInputOnSuggestionClick={false}
            inputProps={{
              placeholder: 'Enter a city name',
              onChange: handleChange,
              value: query,
            }}
            suggestions={results}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={() => {}}
            onSuggestionSelected={onSuggestionSelected}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
          />
          <SearchButton>
            <FontAwesomeIcon
              size="2x"
              icon={isLookingUp || isFetchingCurrent ? faSpinner : faSearch}
              spin={isLookingUp || isFetchingCurrent}
            />
          </SearchButton>
        </SearchContainer>
      </form>
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <SearchLocation onClick={() => getPosition()}>
          <span>Or use my location</span>
        </SearchLocation>
      </div>
    </SearchWrapper>
  );
}

export default SearchBox;
