import { Card, CardContent, CardTitle } from "@/components/ui/card";
import connectDB from "@/database/connectDatabase";
import PurchaseModel from "@/database/models/CheckoutModel";
import React from "react";

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
  console.log(total);

  return { count: count ?? 0, total };
}

const Dashboard = async () => {
  const { count, total } = await totalEarning();

  return (
    <div className="grid grid-cols-3">
      <StatCard
        title={"Total Earning"}
        detail={`${count} Orders`}
        value={`$${total}`}
      />
    </div>
  );
};

const StatCard = ({ title, detail, value }) => {
  return (
    <Card className="flex py-5">
      <CardContent className="py-0">
        <CardTitle>{title}</CardTitle>
        <p className="text-muted-foreground mt-1">{detail}</p>
        <p className="text-muted-foreground mt-2">{value}</p>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
