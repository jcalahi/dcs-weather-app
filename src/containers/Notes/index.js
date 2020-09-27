import React, { useContext } from 'react';
import styled from 'styled-components';
import uniqueId from 'lodash/uniqueId';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import {
  faPlus,
  faTrashAlt,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';

import WeatherContext from '../../context/WeatherContext';

import Card from '../../components/Card';
import Empty from '../../components/Empty';
import Text from '../../components/Text';
import Icon from '../../components/Icon';
import Header from '../../components/Header';
import Grid from '../../components/Grid';
import TextArea from '../../components/TextArea';

import { ACTION_TYPES } from '../../constants';

const NotesHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Notes() {
  const [{ weather, notes, loadingWeather }, dispatch] = useContext(
    WeatherContext.WeatherStateContext
  );
  const checkNotesContent = () => {
    const { location } = weather;
    const filteredNotes = notes.filter((note) => note.name === location.name);

    if (filteredNotes.length === 0) {
      return (
        <Empty size="6x" text="Add some notes here'" icon={faFolderOpen} />
      );
    }
    return <Grid>{renderNotes(filteredNotes)}</Grid>;
  };

  const renderNotes = (filteredNotes) => {
    return filteredNotes.map((item, idx) => {
      return (
        <Card key={`${item.name}-${idx}`}>
          <Card.Header title={item.dateCreated}>
            <Icon
              hover
              size="2x"
              icon={faTrashAlt}
              onIconClick={() =>
                dispatch({
                  type: ACTION_TYPES.REMOVE_NOTE,
                  payload: {
                    id: item.id
                  }
                })
              }
            />
          </Card.Header>
          <Card.Body style={{ marginBottom: '1rem', marginTop: '1rem' }}>
            <TextArea
              value={item.note}
              onBlur={(value) => {
                // only update when value has changed
                if (value !== '' && value !== item.note) {
                  dispatch({
                    type: ACTION_TYPES.EDIT_NOTE,
                    payload: {
                      id: item.id,
                      note: value,
                      editedAt: new Date().toLocaleTimeString()
                    }
                  });
                }
              }}
            />
          </Card.Body>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
              <Text size="1.5rem" weight="600" secondary>
                Created at:{' '}
              </Text>
              <Text size="1.5rem" secondary>
                {item.createdAt}
              </Text>
            </div>
            {item.editedAt && (
              <div>
                <Text size="1.5rem" weight="600" secondary>
                  Edited at:{' '}
                </Text>
                <Text size="1.5rem" secondary>
                  {item.editedAt}
                </Text>
              </div>
            )}
          </div>
        </Card>
      );
    });
  };

  return (
    <>
      <NotesHeader>
        <h2>
          <Text size="2.5rem" weight="600" secondary>
            Notes
          </Text>
        </h2>
        <Icon
          onIconClick={() => {
            dispatch({
              type: ACTION_TYPES.ADD_NOTE,
              payload: {
                name: weather.location.name,
                id: uniqueId(`${weather.location.name}_`),
                dateCreated: new Date().toLocaleDateString(),
                createdAt: new Date().toLocaleTimeString()
              }
            });
          }}
          size="3x"
          icon={faPlus}
          hover
        />
      </NotesHeader>
      {loadingWeather ? (
        <Empty
          size="6x"
          text={loadingWeather ? 'Loading notes...' : 'Add some notes here'}
          icon={loadingWeather ? faSpinner : faFolderOpen}
          spin={loadingWeather}
        />
      ) : (
        checkNotesContent()
      )}
    </>
  );
}

export default Notes;
