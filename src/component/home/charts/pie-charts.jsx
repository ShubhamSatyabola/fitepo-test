import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell
} from "recharts";
const pieData = [
  { name: "Group A", value: 65 },
  { name: "Group B", value: 20 },
  { name: "Group C", value: 15 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
export function PieCharts() {
  return <div className="bar-chart">
        <div className="chart-content">
          <div>
            <h3>Customers</h3>
            <p>Customers that buy products</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={300} height={300}>
            <Pie data={pieData} cx={200} cy={130} innerRadius={60} outerRadius={90} // fill="#8884d8"
        paddingAngle={5} dataKey="value">
              {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <text x={200} y={110} textAnchor="middle" dominantBaseline="middle" fill="#333" fontWeight={"bold"} fontSize={20}>
              65%
            </text>
            <text x={200} y={130} textAnchor="middle" dominantBaseline="middle" fill="#333" fontSize={15}>
              Total New
            </text>
            <text x={200} y={150} textAnchor="middle" dominantBaseline="middle" fill="#333" fontSize={15}>
              Customers
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>;
}
  