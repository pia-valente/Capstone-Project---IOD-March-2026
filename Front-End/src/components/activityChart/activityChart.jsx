import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


function ActivityChart() {
  return (
    <BarChart
      xAxis={[{ data: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'], color: "var(--primary-color)" }]}
      series={[{ label: 'Active Days', data: [10, 12, 5, 18, 16, 5], color: "var(--primary-color)"}]}
      height={300}
    ></BarChart>
  );
}

export default ActivityChart;