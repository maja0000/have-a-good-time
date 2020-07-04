import React from 'react';
import TimeLine from './TimeLine';
import DeathsGermany from './DeathsGermany';
import Recovered from './Recovered';
// test
export default function Stats() {
  return (
    <div className="stats-wrapper">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignContent: 'center',
        }}
      >
        <DeathsGermany />
        <Recovered />
      </div>
      <TimeLine />
    </div>
  );
}
