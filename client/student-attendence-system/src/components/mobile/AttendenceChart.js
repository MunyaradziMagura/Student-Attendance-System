import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// const data1 = [
//   {
//     date: "2/8/2022",
//     Attendce: 4,
//     maxAttendence: 8,
//   },
//   {
//     date: "3/8/2022",
//     Attendce: 5,
//     maxAttendence: 8,
//   },
//   {
//     date: "4/8/2022",
//     Attendce: 7,
//     maxAttendence: 8,
//   },
//   {
//     date: "5/8/2022",
//     Attendce: 8,
//     maxAttendence: 8,
//   },
//   {
//     date: "6/8/2022",
//     Attendce: 2,
//     maxAttendence: 8,
//   },
//   {
//     date: "7/8/2022",
//     Attendce: 4,
//     maxAttendence: 8,
//   },
//   {
//     date: "8/8/2022",
//     Attendce: 3,
//     maxAttendence: 8,
//   },
//   {
//     date: "9/8/2022",
//     Attendce: 1,
//     maxAttendence: 8,
//   },
//   {
//     date: "10/8/2022",
//     Attendce: 2,
//     maxAttendence: 8,
//   },
//   {
//     date: "11/8/2022",
//     Attendce: 2,
//     maxAttendence: 8,
//   },
//   {
//     date: "12/8/2022",
//     Attendce: 4,
//     maxAttendence: 8,
//   },
//   {
//     date: "13/8/2022",
//     Attendce: 4,
//     maxAttendence: 8,
//   },
//   {
//     date: "14/8/2022",
//     Attendce: 4,
//     maxAttendence: 8,
//   },
//   {
//     date: "15/8/2022",
//     Attendce: 4,
//     maxAttendence: 8,
//   },
//   {
//     date: "16/8/2022",
//     Attendce: 8,
//     maxAttendence: 8,
//   },
// ];


const AttendenceChart = (props) => {
  var data = [];
  var temp1 = structuredClone(props.props);
  data = Object.keys(temp1).map((key) =>{
    var temp2 = structuredClone(temp1[key]);
    var tmpObject = Object.keys(temp2).map((key2) => {
      return{
        date: temp2[key2].date, Attendance: temp2[key2].attendance
      }
    });
    return tmpObject[0];
  });
  
  console.log(data);

  return (<>
    <LineChart
      width={470}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 40,
        left: -10,
        bottom: 5,
      }}
      className="AttendenceChartGraphStyle"
    >
      <CartesianGrid />
      <XAxis dataKey="date"  label={{ value: "Date", angle: 0, position: "Right" }} />
      <YAxis
        label={{ value: "Attendence", angle: -90, position: "Left" }}
      ></YAxis>
      <Tooltip />
      <Legend />
      <Line
        fill="#8884d8"
        type="monotone"
        dataKey="Attendance"
        stroke="#8884d8"
        strokeWidth="4"
        activeDot={{ r: 9 }}
        dot={{ r: 4 }}
      />
    </LineChart>
    </>
  );
};

export default AttendenceChart;
