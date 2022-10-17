import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function AttendenceChart ({data},props){
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: -10,
        bottom: 5,
      }}
      className="AttendenceChartGraphStyle"
    >
      <CartesianGrid />
      <XAxis dataKey="date" />
      <YAxis
        label={{ value: "Attendence", angle: -90, position: "Left" }}
      ></YAxis>
      <Tooltip />
      <Legend />
      <Line
        fill="#8884d8"
        type="monotone"
        dataKey="Attendce"
        stroke="#8884d8"
        strokeWidth="4"
        activeDot={{ r: 9 }}
        dot={{ r: 4 }}
      />
    </LineChart>
  );
};
