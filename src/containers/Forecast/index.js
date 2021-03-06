import React from 'react';
import { string } from 'prop-types';
import {
  faSun,
  faMoon,
  faFolderOpen
} from '@fortawesome/free-regular-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// context
import useForecast from '../../hooks/useForecast';
// components
import Card from '../../components/Card';
import Grid from '../../components/Grid';
import Text from '../../components/Text';
import Icon from '../../components/Icon';
import Empty from '../../components/Empty';
// etc
import { WEEKDAYS } from '../../constants';
import Header from '../../components/Header';

function Forecast({ cityData }) {
  const { forecast, isLoadingForecoast } = useForecast(cityData);

  const renderForecast = () => {
    const dates = [];
    for (let day in forecast) {
      const name = new Date(forecast[day].date).getDay();
      dates.push(
        <Card key={day}>
          <Card.Header title={WEEKDAYS[name]} />
          <Card.Body
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '1rem'
            }}
          >
            <div style={{ flex: 1 }}>
              <Text size="5rem" secondary>
                {forecast[day].avgtemp}&deg;
              </Text>
            </div>
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div>
                <Text size="1.5rem" primary>
                  max:&nbsp;
                </Text>
                <Text size="1.8rem" secondary>
                  {forecast[day].maxtemp}&deg;
                </Text>
              </div>
              <div>
                <Text size="1.5rem" primary>
                  min:&nbsp;
                </Text>
                <Text size="1.8rem" secondary>
                  {forecast[day].mintemp}&deg;
                </Text>
              </div>
            </div>
          </Card.Body>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Icon icon={faSun} size="2x" />
            <Text size="1.3rem" secondary>
              {forecast[day].astro.sunrise}
            </Text>
            <Icon icon={faMoon} size="2x" />
            <Text size="1.3rem" secondary>
              {forecast[day].astro.moonrise}
            </Text>
          </div>
        </Card>
      );
    }
    return dates;
  };

  return (
    <>
      <Header>
        <h2>
          <Text size="2.5rem" weight="600" secondary>
            7-day Forecast
          </Text>
        </h2>
      </Header>
      {Object.keys(forecast).length === 0 ? (
        <Empty
          size="6x"
          text={isLoadingForecoast ? 'Loading forecast...' : 'No forecast'}
          icon={isLoadingForecoast ? faSpinner : faFolderOpen}
          spin={isLoadingForecoast}
        />
      ) : (
        <Grid style={{ minHeight: '14.25rem' }}>{renderForecast()}</Grid>
      )}
    </>
  );
}

Forecast.propTypes = {
  cityData: string
};

export default Forecast;
