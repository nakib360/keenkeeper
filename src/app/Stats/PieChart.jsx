"use client"
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import './styles.css'

const options = {
  chart: {
    type: 'donut',
    width: 420,
  },
  labels: ['Call', 'Text', 'Video'],
  colors: ['#0EA5E9', '#14B8A6', '#F59E0B'],
  plotOptions: {
    pie: {
      borderRadius: 12,
      spacing: 5,
      donut: {
        size: '68%',
        labels: {
          show: true,
          total: {
            show: true,
            label: 'Total Timelines',
          },
        },
      },
    },
  },
  stroke: { width: 0 },
  dataLabels: { enabled: false },
  legend: { position: 'bottom' },
  title: {
    text: 'Interactions by medium',
    align: 'left',
  },
  responsive: [
    {
      breakpoint: 480,
      options: { chart: { width: 320 } },
    },
  ],
}

const ApexChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timelineHistory") || "[]");
    setChartData(data);
  }, []);

  const call = chartData.filter(i => i.medium === "Call").length;
  const text = chartData.filter(i => i.medium === "Text").length;
  const video = chartData.filter(i => i.medium === "Video").length;

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={[call, text, video]}
        type="donut"
        width={420}
      />
    </div>
  )
}

export default ApexChart