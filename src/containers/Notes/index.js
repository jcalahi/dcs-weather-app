import React, { useContext } from 'react';
import styled from 'styled-components';
import uniqueId from 'lodash/uniqueId';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import WeatherContext from '../../context/WeatherContext';

import Card from '../../components/Card';
import Empty from '../../components/Empty';
import Text from '../../components/Text';
import Icon from '../../components/Icon';
import Header from '../../components/Header';
import Grid from '../../components/Grid';

import { ACTION_TYPES } from '../../constants';

const NotesHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Notes() {
  const [{ weather, notes }, dispatch] = useContext(
    WeatherContext.WeatherStateContext
  );

  const renderNotes = () => {
    console.log(weather);
    console.log(notes);
    return notes.map((item, idx) => {
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
            <textarea
              value={item.note}
              autoFocus
              style={{ resize: 'none', width: '100%' }}
              rows="5"
              onBlur={(e) => {
                const text = e.target.value;
                // only update when value has changed
                if (text !== '' && text !== item.note) {
                  dispatch({
                    type: ACTION_TYPES.EDIT_NOTE,
                    payload: {
                      id: item.id,
                      note: e.target.value,
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
            <div>
              <Text size="1.5rem" weight="600" secondary>
                Edited at:{' '}
              </Text>
              <Text size="1.5rem" secondary>
                {item.editedAt}
              </Text>
            </div>
          </div>
        </Card>
      );
    });
  };

  return (
    <>
      <NotesHeader>
        <h2>
          <Text size="3rem" primary>
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
      {notes.length === 0 ? (
        <Empty size="6x" text="No notes" icon={faFolderOpen} />
      ) : (
        <Grid>{renderNotes()}</Grid>
      )}
    </>
  );
}

export default Notes;
