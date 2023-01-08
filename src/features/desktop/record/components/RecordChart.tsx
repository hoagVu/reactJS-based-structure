import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { some } from "utils/helpers";
import "../Record.scss";

interface IRecordChartProps {
  data: some[];
}

const RecordChart: React.FC<IRecordChartProps> = ({ data }) => {
  return (
    <div className="record-chart-container">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid horizontal={false} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "#ffffff", fontWeight: 300 }}
            tickLine={false}
            axisLine={false}
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

export default RecordChart;
