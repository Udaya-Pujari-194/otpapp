// src/pages/Dashboard.jsx
// import Chart from 'react-apexcharts';

// function Dashboard() {
//   const chartData = {
//     series: [44, 55, 13, 33],
//     options: {
//       chart: { type: 'pie' },
//       labels: ['React', 'Vue', 'Angular', 'Svelte']
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '100px' }}>
//       <h1>Dashboard</h1>
//       <Chart options={chartData.options} series={chartData.series} type="pie" width="380" />
//     </div>
//   );
// }

// export default Dashboard;


import React from 'react';
import Chart from 'react-apexcharts';

const Dashboard = () => {
  const lineChartData = {
    series: [{ name: 'Margin %', data: [48, 30, 80, 60, 100, 75] }],
    options: {
      chart: { type: 'line', toolbar: { show: false } },
      xaxis: { categories: ['12th Oct', '13th', '14th', '15th', '16th', '17th'] },
      stroke: { curve: 'smooth' },
      markers: { size: 4 },
      tooltip: { enabled: true },
    },
  };

  const donutChartData = {
    series: [65, 35],
    options: {
      labels: ['Remaining', 'Consumed'],
      colors: ['#3b82f6', '#facc15'],
      dataLabels: { enabled: true },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-blue-700 text-white p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        <button className="text-white">Logout</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Inventory Card */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-4">
          <p>Inventory</p>
          <p className="text-2xl font-bold">93%</p>
          <Chart
            type="line"
            height={100}
            series={[{ data: [20, 60, 50, 80] }]}
            options={{
              chart: { toolbar: { show: false } },
              stroke: { curve: 'smooth', colors: ['#f59e0b'] },
              xaxis: { labels: { show: false } },
              yaxis: { show: false },
              grid: { show: false },
            }}
          />
        </div>

        {/* Battery Donut */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-4">
          <p>Battery</p>
          <Chart type="donut" height={220} options={donutChartData.options} series={donutChartData.series} />
        </div>

        {/* Margin % Line */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-4 md:col-span-1 lg:col-span-1">
          <p>Margin %</p>
          <Chart type="line" height={220} options={lineChartData.options} series={lineChartData.series} />
        </div>

        {/* Orders */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-4">
          <p>Orders</p>
          <p className="text-2xl font-bold">65%</p>
          <Chart
            type="line"
            height={100}
            series={[{ data: [30, 40, 35, 50, 49, 60] }]}
            options={{
              chart: { toolbar: { show: false } },
              stroke: { curve: 'smooth', colors: ['#ef4444'] },
              xaxis: { labels: { show: false } },
              yaxis: { show: false },
              grid: { show: false },
            }}
          />
        </div>
      </div>

      <footer className="text-center text-sm mt-6 text-white/80">
        © 2025, Greendzine Technologies Pvt. Ltd. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Dashboard;

