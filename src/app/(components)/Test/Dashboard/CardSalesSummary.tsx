"use client";

import React, { useState } from "react";
import { TrendingUp } from "lucide-react";
// import { TrendingUp, TrendingDown } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  TooltipProps,
  Cell,
} from "recharts";

type SalesDataPoint = {
  date: string; // e.g. "2025-07-25" or "2025-W31" or "2025-07"
  totalValue: number;
  changePercentage: number;
};

const rawSalesData: Record<string, SalesDataPoint[]> = {
  daily: [
    { date: "2025-07-25", totalValue: 1500000, changePercentage: 5.5 },
    { date: "2025-07-26", totalValue: 1400000, changePercentage: -3.3 },
    { date: "2025-07-27", totalValue: 1700000, changePercentage: 21.4 },
    { date: "2025-07-28", totalValue: 1650000, changePercentage: -2.9 },
  ],
  weekly: [
    { date: "2025-W29", totalValue: 9500000, changePercentage: 7.1 },
    { date: "2025-W30", totalValue: 8900000, changePercentage: -6.3 },
    { date: "2025-W31", totalValue: 9700000, changePercentage: 8.9 },
  ],
  monthly: [
    { date: "2025-05", totalValue: 38000000, changePercentage: 12.3 },
    { date: "2025-06", totalValue: 35000000, changePercentage: -7.9 },
    { date: "2025-07", totalValue: 40000000, changePercentage: 14.2 },
  ],
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null;

  const data = payload[0].payload as SalesDataPoint;
  const value = `$${data.totalValue.toLocaleString("en")}`;
  const percent = data.changePercentage.toFixed(1);
  const isPositive = data.changePercentage >= 0;

  let labelText = label;
  if (label.includes("-W")) {
    const [year, week] = label.split("-W");
    labelText = `Week ${week} ${year}`;
  } else if (label.includes("-")) {
    // Could be monthly or daily
    if (label.length === 7) {
      // monthly yyyy-mm
      const [year, month] = label.split("-");
      labelText = `${new Date(Number(year), Number(month) - 1).toLocaleString(
        "en-US",
        {
          month: "long",
        }
      )} ${year}`;
    } else {
      // daily
      labelText = new Date(label).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  }

  return (
    <div className="bg-white border rounded shadow p-3 text-sm">
      <p className="font-semibold">{labelText}</p>
      <p>
        Sales: <strong>{value}</strong>
      </p>
      <p className={isPositive ? "text-green-600" : "text-red-600"}>
        {isPositive ? "▲" : "▼"} {percent}%
      </p>
    </div>
  );
};

const CardSalesSummary = () => {
  const [timeframe, setTimeframe] = useState<"daily" | "weekly" | "monthly">(
    "weekly"
  );

  const salesData = rawSalesData[timeframe];

  const totalValueSum = salesData.reduce(
    (acc, curr) => acc + curr.totalValue,
    0
  );
  const averageChangePercentage =
    salesData.reduce((acc, curr) => acc + curr.changePercentage, 0) /
      salesData.length || 0;

  const highestValueData = salesData.reduce((acc, curr) =>
    acc.totalValue > curr.totalValue ? acc : curr
  );

  const highestValueDate = (() => {
    const date = highestValueData.date;
    if (date.includes("-W")) {
      const [year, week] = date.split("-W");
      return `Week ${week} ${year}`;
    } else if (date.includes("-")) {
      if (date.length === 7) {
        // monthly yyyy-mm
        const [year, month] = date.split("-");
        return `${new Date(Number(year), Number(month) - 1).toLocaleString(
          "en-US",
          {
            month: "short",
          }
        )} ${year}`;
      } else {
        // daily
        return new Date(date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "2-digit",
        });
      }
    }
    return date;
  })();

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl flex flex-col justify-between">
      {/* HEADER */}
      <div>
        <h2 className="text-lg font-semibold mb-2 px-7 pt-5">Sales Summary</h2>
        <hr />
      </div>

      {/* BODY */}
      <div>
        {/* BODY HEADER */}
        <div className="flex justify-between items-center mb-6 px-7 mt-5">
          <div className="text-lg font-medium">
            <p className="text-xs text-gray-400">Value</p>
            <span className="text-2xl font-extrabold">
              $
              {(totalValueSum / 1000000).toLocaleString("en", {
                maximumFractionDigits: 2,
              })}
              m
            </span>
            <span className="text-green-500 text-sm ml-2 flex items-center">
              <TrendingUp className="inline w-4 h-4 mr-1" />
              {averageChangePercentage.toFixed(2)}%
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
        <ResponsiveContainer width="100%" height={350} className="px-7">
          <BarChart
            data={salesData}
            margin={{ top: 0, right: 0, left: -25, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="" vertical={false} />
            <XAxis
              dataKey="date"
              tickFormatter={(value) => {
                if (value.includes("-W")) {
                  return value.replace("2025-W", "W");
                }
                if (value.length === 7) {
                  const [year, month] = value.split("-");
                  return `${month}/${year.slice(2)}`;
                }
                const date = new Date(value);
                return `${date.getMonth() + 1}/${date.getDate()}`;
              }}
            />
            <YAxis
              tickFormatter={(value) => `$${(value / 1000000).toFixed(0)}m`}
              tick={{ fontSize: 12, dx: -1 }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="totalValue" barSize={10} radius={[10, 10, 0, 0]}>
              {salesData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.changePercentage >= 0 ? "#16a34a" : "#dc2626"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* FOOTER */}
      <div>
        <hr />
        <div className="flex justify-between items-center mt-6 text-sm px-7 mb-4">
          <p>{salesData.length} entries</p>
          <p className="text-sm">
            Highest Sales Date:{" "}
            <span className="font-bold">{highestValueDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSalesSummary;

// "use client";

// import { TrendingUp } from "lucide-react";
// import React, { useState } from "react";
// import {
//   Bar,
//   BarChart,
//   CartesianGrid,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

// // Mock sales summary data
// const mockSalesData = [
//   { date: "2025-07-01", totalValue: 500000, changePercentage: 5 },
//   { date: "2025-07-02", totalValue: 800000, changePercentage: 10 },
//   { date: "2025-07-03", totalValue: 750000, changePercentage: -4 },
//   { date: "2025-07-04", totalValue: 920000, changePercentage: 6 },
//   { date: "2025-07-05", totalValue: 1000000, changePercentage: 8 },
//   { date: "2025-07-06", totalValue: 860000, changePercentage: -2 },
//   { date: "2025-07-07", totalValue: 1100000, changePercentage: 12 },
// ];

// const CardSalesSummary = () => {
//   const salesData = mockSalesData;
//   const [timeframe, setTimeframe] = useState("weekly");

//   const totalValueSum = salesData.reduce((acc, curr) => acc + curr.totalValue, 0) || 0;

//   const averageChangePercentage =
//     salesData.reduce((acc, curr) => acc + curr.changePercentage / salesData.length, 0) || 0;

//   const highestValueData = salesData.reduce((acc, curr) =>
//     acc.totalValue > curr.totalValue ? acc : curr
//   );

//   const highestValueDate = new Date(highestValueData.date).toLocaleDateString("en-US", {
//     month: "numeric",
//     day: "numeric",
//     year: "2-digit",
//   });

//   return (
//     <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl flex flex-col justify-between">
//       {/* HEADER */}
//       <div>
//         <h2 className="text-lg font-semibold mb-2 px-7 pt-5">Sales Summary</h2>
//         <hr />
//       </div>

//       {/* BODY */}
//       <div>
//         {/* BODY HEADER */}
//         <div className="flex justify-between items-center mb-6 px-7 mt-5">
//           <div className="text-lg font-medium">
//             <p className="text-xs text-gray-400">Value</p>
//             <span className="text-2xl font-extrabold">
//               $
//               {(totalValueSum / 1_000_000).toLocaleString("en", {
//                 maximumFractionDigits: 2,
//               })}
//               m
//             </span>
//             <span className="text-green-500 text-sm ml-2">
//               <TrendingUp className="inline w-4 h-4 mr-1" />
//               {averageChangePercentage.toFixed(2)}%
//             </span>
//           </div>
//           <select
//             className="shadow-sm border border-gray-300 bg-white p-2 rounded"
//             value={timeframe}
//             onChange={(e) => setTimeframe(e.target.value)}
//           >
//             <option value="daily">Daily</option>
//             <option value="weekly">Weekly</option>
//             <option value="monthly">Monthly</option>
//           </select>
//         </div>

//         {/* CHART */}
//         <ResponsiveContainer width="100%" height={350} className="px-7">
//           <BarChart
//             data={salesData}
//             margin={{ top: 0, right: 0, left: -25, bottom: 0 }}
//           >
//             <CartesianGrid strokeDasharray="" vertical={false} />
//             <XAxis
//               dataKey="date"
//               tickFormatter={(value) => {
//                 const date = new Date(value);
//                 return `${date.getMonth() + 1}/${date.getDate()}`;
//               }}
//             />
//             <YAxis
//               tickFormatter={(value) => `$${(value / 1_000_000).toFixed(0)}m`}
//               tick={{ fontSize: 12, dx: -1 }}
//               tickLine={false}
//               axisLine={false}
//             />
//             <Tooltip
//               formatter={(value: number) => [`$${value.toLocaleString("en")}`]}
//               labelFormatter={(label) => {
//                 const date = new Date(label);
//                 return date.toLocaleDateString("en-US", {
//                   year: "numeric",
//                   month: "long",
//                   day: "numeric",
//                 });
//               }}
//             />
//             <Bar
//               dataKey="totalValue"
//               fill="#3182ce"
//               barSize={10}
//               radius={[10, 10, 0, 0]}
//             />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* FOOTER */}
//       <div>
//         <hr />
//         <div className="flex justify-between items-center mt-6 text-sm px-7 mb-4">
//           <p>{salesData.length} days</p>
//           <p>
//             Highest Sales Date:{" "}
//             <span className="font-bold">{highestValueDate}</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardSalesSummary;
