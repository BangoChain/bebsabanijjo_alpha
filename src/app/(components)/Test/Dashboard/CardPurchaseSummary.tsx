"use client";

import React, { useState } from "react";
import { TrendingUp } from "lucide-react";
// import { TrendingUp, TrendingDown } from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { TooltipProps } from "recharts";
type PurchaseDataPoint = {
  date: string; // ISO string or any date string
  totalPurchased: number;
  changePercentage: number;
};

// Sample raw data for demo (you can expand/change this)
const rawPurchaseData: Record<string, PurchaseDataPoint[]> = {
  daily: [
    { date: "2025-07-25", totalPurchased: 1200000, changePercentage: 3.5 },
    { date: "2025-07-26", totalPurchased: 1300000, changePercentage: 8.3 },
    { date: "2025-07-27", totalPurchased: 1250000, changePercentage: -3.8 },
    { date: "2025-07-28", totalPurchased: 1400000, changePercentage: 12.0 },
  ],
  weekly: [
    { date: "2025-W29", totalPurchased: 9000000, changePercentage: 5.2 },
    { date: "2025-W30", totalPurchased: 8500000, changePercentage: -3.9 },
    { date: "2025-W31", totalPurchased: 9200000, changePercentage: 8.4 },
  ],
  monthly: [
    { date: "2025-05", totalPurchased: 35000000, changePercentage: 10.5 },
    { date: "2025-06", totalPurchased: 32000000, changePercentage: -8.5 },
    { date: "2025-07", totalPurchased: 37000000, changePercentage: 15.2 },
  ],
};

const CardPurchaseSummary = () => {
  const [timeframe, setTimeframe] = useState<"daily" | "weekly" | "monthly">(
    "weekly"
  );

  const purchaseData = rawPurchaseData[timeframe];

  const totalPurchase = purchaseData.reduce(
    (sum, entry) => sum + entry.totalPurchased,
    0
  );
  const averageChange =
    purchaseData.reduce((sum, entry) => sum + entry.changePercentage, 0) /
      purchaseData.length || 0;

  const lastDataPoint = purchaseData[purchaseData.length - 1];
  const isPositive = lastDataPoint.changePercentage >= 0;

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipProps<number, string>) => {
    if (!active || !payload?.length) return null;

    const data = payload[0].payload;
    const value = `$${data.totalPurchased.toLocaleString("en")}`;
    const percent = data.changePercentage.toFixed(1);
    const isPositive = data.changePercentage >= 0;

    let labelText = label;
    if (timeframe === "daily") {
      labelText = new Date(label).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } else if (timeframe === "weekly") {
      // label like "2025-W31"
      const [year, week] = label.split("-W");
      labelText = `Week ${week} ${year}`;
    } else if (timeframe === "monthly") {
      // label like "2025-07"
      const [year, month] = label.split("-");
      labelText = `${new Date(Number(year), Number(month) - 1).toLocaleString(
        "en-US",
        { month: "long" }
      )} ${year}`;
    }

    return (
      <div className="bg-white border rounded shadow p-3 text-sm">
        <p className="font-semibold">{labelText}</p>
        <p>
          Purchased: <strong>{value}</strong>
        </p>
        <p className={isPositive ? "text-green-600" : "text-red-600"}>
          {isPositive ? "▲" : "▼"} {percent}%
        </p>
      </div>
    );
  };

  return (
    <div className="bg-white shadow-md rounded-2xl flex flex-col justify-between h-full">
      {/* HEADER */}
      <div className="px-7 pt-5">
        <h2 className="text-lg font-semibold mb-2">Purchase Summary</h2>
        <hr />
      </div>

      {/* BODY */}
      <div className="flex justify-between items-center px-7 mt-5 mb-3">
        <div className="text-lg font-medium">
          <p className="text-xs text-gray-400">Total Purchased</p>
          <span className="text-2xl font-extrabold">
            $
            {(totalPurchase / 1000000).toLocaleString("en", {
              maximumFractionDigits: 2,
            })}
            m
          </span>
          <span
            className={`ml-2 text-sm ${
              averageChange >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            <TrendingUp className="inline w-4 h-4 mr-1" />
            {averageChange.toFixed(2)}%
          </span>
        </div>
        <select
          className="shadow-sm border border-gray-300 bg-white p-2 rounded"
          value={timeframe}
          onChange={(e) =>
            setTimeframe(e.target.value as "daily" | "weekly" | "monthly")
          }
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* CHART */}
      <ResponsiveContainer width="100%" height={250} className="px-4">
        <AreaChart
          data={purchaseData}
          margin={{ top: 0, right: 10, left: -10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#16a34a" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#bbf7d0" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorNegative" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#dc2626" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#fecaca" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="date"
            tickFormatter={(value) => {
              if (timeframe === "daily") {
                const date = new Date(value);
                return `${date.getMonth() + 1}/${date.getDate()}`;
              }
              if (timeframe === "weekly") {
                return value.replace("2025-W", "W");
              }
              if (timeframe === "monthly") {
                const [year, month] = value.split("-");
                return `${month}/${year.slice(2)}`;
              }
              return value;
            }}
          />
          <YAxis
            tickFormatter={(value) => `$${(value / 1000000).toFixed(0)}m`}
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="linear"
            dataKey="totalPurchased"
            stroke={isPositive ? "#16a34a" : "#dc2626"}
            fill={`url(#${isPositive ? "colorPositive" : "colorNegative"})`}
            strokeWidth={2}
            dot={true}
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* FOOTER */}
      <div className="px-7 mt-4 mb-5 text-sm text-gray-500 flex justify-between">
        <p>{purchaseData.length} entries</p>
        <p>
          Latest change:{" "}
          <span
            className={
              isPositive
                ? "text-green-600 font-semibold"
                : "text-red-600 font-semibold"
            }
          >
            {isPositive ? "▲" : "▼"} {lastDataPoint.changePercentage.toFixed(1)}
            %
          </span>
        </p>
      </div>
    </div>
  );
};

export default CardPurchaseSummary;

// "use client";

// import { TrendingDown, TrendingUp } from "lucide-react";
// import numeral from "numeral";
// import React from "react";
// import {
//   Area,
//   AreaChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

// // Mock purchase summary data
// const mockPurchaseData = [
//   {
//     date: "2025-07-01",
//     totalPurchased: 5000,
//     changePercentage: 10,
//   },
//   {
//     date: "2025-07-02",
//     totalPurchased: 4500,
//     changePercentage: -10,
//   },
//   {
//     date: "2025-07-03",
//     totalPurchased: 6200,
//     changePercentage: 15,
//   },
//   {
//     date: "2025-07-04",
//     totalPurchased: 5800,
//     changePercentage: -6.5,
//   },
//   {
//     date: "2025-07-05",
//     totalPurchased: 7300,
//     changePercentage: 11,
//   },
// ];

// const CardPurchaseSummary = () => {
//   const purchaseData = mockPurchaseData;
//   const lastDataPoint = purchaseData[purchaseData.length - 1] || null;

//   return (
//     <div className="flex flex-col justify-between row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-white shadow-md rounded-2xl">
//       <>
//         {/* HEADER */}
//         <div>
//           <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
//             Purchase Summary
//           </h2>
//           <hr />
//         </div>

//         {/* BODY */}
//         <div>
//           {/* BODY HEADER */}
//           <div className="mb-4 mt-7 px-7">
//             <p className="text-xs text-gray-400">Purchased</p>
//             <div className="flex items-center">
//               <p className="text-2xl font-bold">
//                 {lastDataPoint
//                   ? numeral(lastDataPoint.totalPurchased).format("$0.00a")
//                   : "0"}
//               </p>
//               {lastDataPoint && (
//                 <p
//                   className={`text-sm ${
//                     lastDataPoint.changePercentage >= 0
//                       ? "text-green-500"
//                       : "text-red-500"
//                   } flex ml-3`}
//                 >
//                   {lastDataPoint.changePercentage >= 0 ? (
//                     <TrendingUp className="w-5 h-5 mr-1" />
//                   ) : (
//                     <TrendingDown className="w-5 h-5 mr-1" />
//                   )}
//                   {Math.abs(lastDataPoint.changePercentage)}%
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* CHART */}
//           <ResponsiveContainer width="100%" height={200} className="p-2">
//             <AreaChart
//               data={purchaseData}
//               margin={{ top: 0, right: 0, left: -50, bottom: 45 }}
//             >
//               <XAxis dataKey="date" tick={false} axisLine={false} />
//               <YAxis tickLine={false} tick={false} axisLine={false} />
//               <Tooltip
//                 formatter={(value: number) => [
//                   `$${value.toLocaleString("en")}`,
//                 ]}
//                 labelFormatter={(label) => {
//                   const date = new Date(label);
//                   return date.toLocaleDateString("en-US", {
//                     year: "numeric",
//                     month: "long",
//                     day: "numeric",
//                   });
//                 }}
//               />
//               <Area
//                 type="linear"
//                 dataKey="totalPurchased"
//                 stroke="#8884d8"
//                 fill="#8884d8"
//                 dot={true}
//               />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>
//       </>
//     </div>
//   );
// };

// export default CardPurchaseSummary;
