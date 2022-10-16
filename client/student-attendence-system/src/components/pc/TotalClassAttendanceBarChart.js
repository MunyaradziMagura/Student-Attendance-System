import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
function TotalClassAttendanceBarChart({data}, props) {

    return (
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Seminar" fill="#03045e" />
          <Bar dataKey="Workshop" fill="#023e8a"/>
          <Bar dataKey="Lecture" fill="#0077b6" />
          <Bar dataKey="Practical" fill="#0096c7" />
          <Bar dataKey="Tutorial" fill="#00b4d8" />
        </BarChart>
      );
}

export default TotalClassAttendanceBarChart