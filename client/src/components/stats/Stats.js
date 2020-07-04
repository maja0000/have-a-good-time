import React, { PureComponent } from 'react';
import TimeLine from './TimeLine';
// import DeathsGermany from './DeathsGermany';
// import Recovered from './Recovered';
import { RadialBarChart, RadialBar } from 'recharts';

// test
import { PieChart, Pie, Sector, Cell, Legend } from 'recharts';

const data = [
  { name: 'Recovered - 181300', value: 181300 },
  { name: 'Deaths - 8,956', value: 8956 },
  { name: 'Infected', value: 6900 },
];
const style = {
  top: 0,
  left: 350,
  lineHeight: '24px',
};

const data1 = [
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

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

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
        {/* <DeathsGermany /> */}
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
            data={data1}
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
        {/* <Recovered /> */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ marginTop: '100px' }}>
            Infected, deaths and recovered in Germany
          </h2>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx={200}
              cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend
              iconSize={10}
              width={120}
              height={140}
              // layout="verticle"
              // verticalAlign="centre"
              wrapperStyle={style}
            />
          </PieChart>
        </div>
      </div>
      <TimeLine />
    </div>
  );
}
