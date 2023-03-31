import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import React, { useEffect, useState } from "react";

type ChartProps = {
  data: any;
};

const Chart = (props: ChartProps) => {
  const { data } = props;

  const [chart, setChart] = useState({});

  useEffect(() => {
    const chartObjects = data?.chart?.map((data: any) => {
      return {
        timestamp: data[0],
        prix: data[1],
        value2: data[2],
        value3: data[3],
      };
    });
    setChart(chartObjects);
  }, [data]);

  console.log(chart);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={730}
        height={250}
        data={chart}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="#425de6" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="5 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="prix"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
