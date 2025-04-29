// src/pages/Dashboard.jsx
import Chart from 'react-apexcharts';

function Dashboard() {
  const chartData = {
    series: [44, 55, 13, 33],
    options: {
      chart: { type: 'pie' },
      labels: ['React', 'Vue', 'Angular', 'Svelte']
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Dashboard</h1>
      <Chart options={chartData.options} series={chartData.series} type="pie" width="380" />
    </div>
  );
}

export default Dashboard;
