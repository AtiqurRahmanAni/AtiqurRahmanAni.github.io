import { Legend } from "@headlessui/react";
import React from "react";
import {
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { memo } from "react";

const LinearRegressionChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        margin={{
          top: 20,
          right: 0,
          bottom: 20,
          left: 0,
        }}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          type="number"
          dataKey="x"
          name="X"
          domain={[0.7, 10.5]}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          type="number"
          dataKey="y"
          name="Y"
          domain={[3, 26]}
          width={28}
          tick={{ fontSize: 12 }}
        />
        <Tooltip cursor={{ strokeDasharray: "1 1" }} />
        <Line
          dataKey="lineY"
          name="Line"
          stroke="#ffd129"
          dot={false}
          activeDot={false}
        />
        <Scatter name="Training samples" dataKey="y" fill="#8884d8" />
        <Legend />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default memo(LinearRegressionChart);
