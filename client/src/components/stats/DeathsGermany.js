import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [
  {
    name: '0-39',
    uv: 36,
    // pv: 36,
    fill: '#a4de6c',
  },
  {
    name: '40-59',
    uv: 389,
    // pv: 4567,
    fill: '#d0ed57',
  },
  {
    name: '60-69',
    uv: 874,
    // pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '70-79',
    uv: 2018,
    // pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '80-89',
    uv: 3978,
    // pv: 3908,
    fill: '#8884d8',
  },
  {
    name: '90+',
    uv: 1681,
    // pv: 4800,
    fill: '#83a6ed ',
  },
  {
    name: 'unknow',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658',
  },
];

const style = {
  top: 0,
  left: 350,
  lineHeight: '24px',
};

export default class DeathsGermany extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9km41z5z/';

  render() {
    return (
      <>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ marginTop: '100px' }}>
            Deaths in Germany in 2020, by age
          </h2>
          <p>Total - 8,956, including 4,960 men and 3,996 woman</p>
          <RadialBarChart
            width={500}
            margin-top={40}
            height={300}
            cx={150}
            cy={150}
            innerRadius={20}
            outerRadius={140}
            barSize={10}
            data={data}
          >
            <RadialBar
              minAngle={15}
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              clockWise
              dataKey="uv"
            />
            <Legend
              iconSize={10}
              width={120}
              height={140}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style}
            />
          </RadialBarChart>
        </div>
      </>
    );
  }
}
