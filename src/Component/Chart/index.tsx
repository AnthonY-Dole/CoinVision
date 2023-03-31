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

import React from "react";

type ChartProps = {
  data: any;
};

const Chart = ({ data }: ChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300} data={data}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
