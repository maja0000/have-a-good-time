import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, Legend } from 'recharts';

const data = [
  { name: 'Recovered - 181300', value: 181300 },
  { name: 'Deaths - 8,956', value: 8956 },
  { name: 'Infected', value: 6900 },
  // { name: 'Group D', value: 200 },
];
const style = {
  top: 0,
  left: 350,
  lineHeight: '24px',
};

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

export default class Recovered extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    return (
      <>
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
      </>
    );
  }
}
