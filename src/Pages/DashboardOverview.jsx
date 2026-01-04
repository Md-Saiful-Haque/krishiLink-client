import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell
} from "recharts";

const DashboardOverview = () => {
  const [summary, setSummary] = useState({});
  const [charts, setCharts] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://krishi-link-server-iota.vercel.app/dashboard/summary")
      .then(res => res.json())
      .then(data => setSummary(data));

    fetch("https://krishi-link-server-iota.vercel.app/dashboard/charts")
      .then(res => res.json())
      .then(data => setCharts(data));

    fetch("https://krishi-link-server-iota.vercel.app/dashboard/recent-crops")
      .then(res => res.json())
      .then(data => setTableData(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>

      {/* 🔹 Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="card bg-[#04264e] text-white shadow p-4">Total Crops: {summary.totalCrops}</div>
        <div className="card bg-[#324354] text-white shadow p-4">Total Interest: {summary.totalInterest}</div>
        <div className="card bg-[#334b35] text-white shadow p-4">Total Posts: {summary.totalPosts}</div>
        <div className="card bg-[#006d77] text-white shadow p-4">Total Amount: ৳{summary.totalAmount}</div>
      </div>

      {/* 📊 Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Bar Chart */}
        <div className="card bg-base-100 shadow p-4">
          <h3 className="font-bold mb-2">Crops by Type</h3>
          <BarChart width={350} height={250} data={charts.typeData}>
            <XAxis dataKey="_id" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </div>

        {/* Pie Chart */}
        <div className="card bg-base-100 shadow p-4">
          <h3 className="font-bold mb-2">Crops by Location</h3>
          <PieChart width={350} height={250}>
            <Pie
              data={charts.locationData}
              dataKey="count"
              nameKey="_id"
              cx="50%"
              cy="50%"
              outerRadius={80}
            >
              {charts.locationData?.map((_, i) => (
                <Cell key={i} fill={["#0088FE", "#00C49F", "#FFBB28"][i % 3]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>

      {/* 📋 Data Table */}
      <div className="card bg-base-100 shadow p-4">
        <h3 className="font-bold mb-3">Recent Crops</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Location</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(crop => (
              <tr key={crop._id}>
                <td>{crop.name}</td>
                <td>{crop.type}</td>
                <td>{crop.location}</td>
                <td>{crop.pricePerUnit} <span className="font-bold">৳</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardOverview;
