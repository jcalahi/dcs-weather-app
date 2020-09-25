import React from 'react';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
// context
import useForecast from '../../hooks/useForecast';
// components
import Card from '../Card';
import Grid from '../Grid';
import Text from '../Text';
import Icon from '../Icon';
// etc
import { WEEKDAYS } from '../../constants';

function Forecast({ cityData }) {
  const { forecast, isFetchingForecast } = useForecast(cityData);

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
    // return forecast.map((favorite, idx) => {
    //   const { current, location } = favorite;
    //   return (
    //     <Card key={idx}>
    //       <Card.Header title={location.name} subtitle={location.region} />
    //       <Card.Body>
    //         <div>
    //           <Text size="5rem" secondary>
    //             {current.temperature}&deg;
    //           </Text>
    //         </div>
    //         <p>
    //           <Text size="1.5rem" weight="200" secondary>
    //             {current.weather_descriptions[0]}
    //           </Text>
    //         </p>
    //       </Card.Body>
    //     </Card>
    //   );
    // });
  };
  console.log(forecast);
  return <Grid>{renderForecast()}</Grid>;
}

export default Forecast;
