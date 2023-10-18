import React from "react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Sector,
} from "recharts";
const data = [
  {
    month: "Jan",
    earning: 200,
  },
  {
    month: "Feb",
    earning: 300,
  },
  {
    month: "Mar",
    earning: 100,
  },
  {
    month: "Apr",
    earning: 600,
  },
  {
    month: "May",
    earning: 400,
  },
  {
    month: "Jun",
    earning: 100,
  },
  {
    month: "Jul",
    earning: 500,
  },
  {
    month: "Aug",
    earning: 200,
  },
  {
    month: "Sep",
    earning: 300,
  },
  {
    month: "Oct",
    earning: 800,
  },
  {
    month: "Nov",
    earning: 600,
  },
  {
    month: "Dec",
    earning: 300,
  },
];
export function BarCharts() {
  return <div className="bar-chart">
        <div className="chart-content">
          <div>
            <h3>Overview</h3>
            <p>Earnings</p>
          </div>
          <select name="" id="bar-select">
            <option value="">Quaterly</option>
          </select>
        </div>
        <div className="bar">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={900} height={300} data={data} margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}>
              {
            /* <CartesianGrid strokeDasharray="3 3" /> */
          }
              <XAxis dataKey="month" stroke="hidden" />

              {
            /* <Tooltip /> */
          }
              {
            /* <Legend /> */
          }
              <Bar dataKey="earning" fill="#0088FE" radius={10} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>;
}
  