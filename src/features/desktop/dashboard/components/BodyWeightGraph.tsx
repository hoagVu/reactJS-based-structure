import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import "../Dashboard.scss";
import { dataChart } from "../utilts";

interface IBodyWeightGraphProps {}

const BodyWeightGraph: React.FC<IBodyWeightGraphProps> = (props) => {
  return (
    <div style={{ width: "100%" }} className="chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={dataChart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid horizontal={false} />
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fill: "#ffffff", fontWeight: 300 }}
          />
          <Tooltip />
          <Line
            dataKey="data2"
            strokeOpacity={1}
            stroke="#FFCC21"
            activeDot={{ r: 8 }}
            dot={{ stroke: "#FFCC21", fill: "#FFCC21", strokeWidth: 2 }}
            strokeWidth={3}
          />
          <Line
            dataKey="data1"
            strokeOpacity={1}
            stroke="#8FE9D0"
            strokeWidth={3}
            dot={{ stroke: "#8FE9D0", fill: "#8FE9D0", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BodyWeightGraph;
