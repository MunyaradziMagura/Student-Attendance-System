import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BottomStudentsAttendanceStackedBarChart({data}, props) {
    return (
        <BarChart
          width={600}
          height={400}
          data={data.slice(0,5)}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
            <Bar dataKey="Lecture" stackId="a" fill="#0077b6" />
            <Bar dataKey="Practical" stackId="a" fill="#0096c7" />
            <Bar dataKey="Tutorial" stackId="a" fill="#00b4d8" />
            <Bar dataKey="Seminar" stackId="a" fill="#03045e" />
            <Bar dataKey="Workshop" stackId="a" fill="#023e8a"/>
        </BarChart>
    );
  }
