import { Card, CardContent, CardTitle } from "@/components/ui/card";
import connectDB from "@/database/connectDatabase";
import PurchaseModel from "@/database/models/CheckoutModel";
import React from "react";
import AllEarningCharts from "./_components/Charts/AllEarningCharts";

async function totalEarning() {
  "use server";
  await connectDB();

  const [count, totalEarning] = await Promise.all([
    PurchaseModel.countDocuments(),
    PurchaseModel.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
        },
      },
    ]),
  ]);

  const total = (totalEarning[0]?.total || 0) / 100;

  return { count: count ?? 0, total };
}

const getSalesStatsForPeriod = async (numberOfDays) => {
  const fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - numberOfDays + 1);
  fromDate.setUTCHours(0, 0, 0, 0);

  const salesStatsFromDB = await PurchaseModel.aggregate([
    {
      $match: {
        createdAt: { $gte: fromDate }, // Filter purchases from the specified number of days
      },
    },
    {
      $group: {
        _id: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" },
          day: { $dayOfMonth: "$createdAt" },
        },
        amount: { $sum: "$amount" },
        count: { $sum: 1 }, // Count the number of purchases for each day
      },
    },
    {
      $project: {
        date: {
          $dateFromParts: {
            year: "$_id.year",
            month: "$_id.month",
            day: "$_id.day",
          },
        },
        amount: 1,
        count: 1,
        _id: 0,
      },
    },
    {
      $sort: { date: 1 }, // Sort the results by date
    },
  ]);

  const salesStatsWithMissingDates = [];
  const currentDate = new Date(fromDate);

  for (let i = 0; i < numberOfDays; i++) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + i);
    const existingData = salesStatsFromDB.find(
      (stat) =>
        stat.date.toISOString().slice(0, 10) === date.toISOString().slice(0, 10)
    );
    if (existingData) {
      existingData.amount /= 100; // Assuming amount is in cents, converting to dollars
      salesStatsWithMissingDates.push(existingData);
    } else {
      salesStatsWithMissingDates.push({ date, count: 0, amount: 0 });
    }
  }

  const formattedSalesStats = salesStatsWithMissingDates.map(
    ({ date, ...rest }) => {
      const formattedDate = `${date.getDate()} ${getMonthName(
        date.getMonth()
      )}`;
      return { ...rest, date: formattedDate };
    }
  );

  return {
    salesStatsArray: formattedSalesStats,
    totalEarnings: salesStatsWithMissingDates.reduce(
      (acc, { amount }) => acc + amount,
      0
    ),
    totalProductsSold: salesStatsWithMissingDates.reduce(
      (acc, { count }) => acc + count,
      0
    ),
  };
};

const getMonthName = (monthIndex) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthIndex];
};

const Dashboard = async () => {
  const [totalEarningResult, sevenDaysSalesStatsResult, lastMonthStatsResult] = await Promise.all([
    totalEarning(),
    getSalesStatsForPeriod(7),
    getSalesStatsForPeriod(30)
  ]);

  const { count, total } = totalEarningResult;

  const {
    salesStatsArray: sevenDaysSalesStats,
    totalEarnings: sevenDaysTotalEarnings,
    totalProductsSold: sevenDaysTotalProductsSold,
  } = sevenDaysSalesStatsResult;

  const {
    salesStatsArray: lastMonthStats,
    totalEarnings: lastMonthTotalEarnings,
    totalProductsSold: lastMonthTotalProductsSold,
  } = lastMonthStatsResult;

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        <StatCard
          title={"Total Sales"}
          detail={`${count} Orders`}
          value={`$${total}`}
        />
        <StatCard
          title={"Last 7 Days Sales"}
          detail={`${sevenDaysTotalProductsSold} Orders`}
          value={`$${sevenDaysTotalEarnings}`}
        />
        <StatCard
          title={"Last 30 Days Sales"}
          detail={`${lastMonthTotalProductsSold} Orders`}
          value={`$${lastMonthTotalEarnings}`}
        />
      </div>

      <AllEarningCharts
        sevenDaysSalesStats={sevenDaysSalesStats}
        lastMonth={lastMonthStats}
      />
    </div>
  );
};

const StatCard = ({ title, detail, value }) => {
  return (
    <Card className="flex py-5">
      <CardContent className="py-0">
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-muted-foreground mt-1">{detail}</p>
        <p className="text-muted-foreground mt-2">{value}</p>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
