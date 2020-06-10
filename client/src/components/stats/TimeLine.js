import React, { PureComponent, useState, useEffect } from 'react';
import './stats.css';
import { css } from '@emotion/core';
import HashLoader from 'react-spinners/HashLoader';
const override = css`
  display: block;
  margin-left: 50%;
  margin-right: 50%;
  border-color: #ffc735;
`;

export default function TimeLine() {
  //   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
  const [loading, setLoading] = useState(false);
  const [generatData, setGeneralData] = useState([]);
  const [timeLine, setTimeLine] = useState([]);

  useEffect(() => {
    fetch(
      'https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search'
    )
      .then((res) => res.json())
      .then((res) => {
        setGeneralData(res.data);
        setTimeLine(res.data.rows);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }, []);

  return (
    <>
      {loading ? (
        <HashLoader
          css={override}
          color={'ffc735'}
          size={50}
          loading={loading}
        />
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 className="stats-title">The most Covid-19 cases and deaths</h3>
            <p className="last-update">
              Last update : {generatData.last_update}
            </p>
            <div className="country-box">
              {timeLine.map((each) => (
                <div className="country-card">
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <h3> {each.country}</h3>
                    <div
                      className="flag"
                      style={{
                        backgroundImage: `url(${each.flag})`,
                      }}
                    ></div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span>Active cases - {each.active_cases}</span>

                    <span>New cases - {each.new_cases}</span>
                    <span>Total cases - {each.total_cases}</span>
                    <span>Total deaths - {each.total_deaths}</span>
                    <span>Total recovered - {each.total_recovered}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
