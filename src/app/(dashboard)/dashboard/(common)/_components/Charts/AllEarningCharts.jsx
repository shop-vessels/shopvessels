"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AllEarningCharts = ({ sevenDaysSalesStats, lastMonth }) => {
  return (
    <div className="relative grid grid-cols-2 mt-10 gap-10">
      <Card className="px-0 flex flex-col gap-5">
        <CardTitle className="p-5 text-center">
          Last 7 Days Sales{" "}
        </CardTitle>
        <CardContent className="px-0 pr-5">
          <CustomLineChart data={sevenDaysSalesStats} />
        </CardContent>
      </Card>
      <Card>
        {" "}
        <CardTitle className="p-5 text-center">
          Last 30 Days Sales{" "}
        </CardTitle>
        <CardContent>
          <CustomLineChart data={lastMonth} />
        </CardContent>
      </Card>
    </div>
  );
};

function CustomLineChart({ data:initData }) {

  const data = initData.map(({count,amount,date})=>({date, sold:count, earning:amount}))

  const countValues = data.map(item => item.sold);
  const minValue = Math.min(...countValues);
  const maxValue = Math.max(...countValues);

  // Calculate the domain for Y-axis
  const yDomain = [Math.floor(minValue), Math.ceil(maxValue)];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis dataKey={"sold"} tickCount={maxValue - minValue + 1} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sold" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}
export default AllEarningCharts;
