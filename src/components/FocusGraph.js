import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";

// 필요한 Chart.js 구성 요소 등록
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Legend,
  Tooltip
);

function FocusGraph({ attentions }) {
  const labels = attentions.map((_, index) => `${index}s`);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Attention Levels",
        data: attentions,
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
    ],
  };

  const options = {
    elements:{
      line: {
        tension : 0.1
      },
    },
    plugins:{
      legend:{
        display:false
      },
    },
    responsive: true,
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "시간(초)",
        },
        ticks: {
          // 레이블 간격 조정 콜백
          callback: function (value, index) {
            // 10초 간격으로 레이블 표시
            return index % 10 === 0 ? this.getLabelForValue(value) : "";
          },
        },
      },
      y: {
        type: "linear",
        title: {
          display: true,
          text: "집중도(1~100)",
        },
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div className="my-5">
      <h2 className="text-xl font-bold mb-4">집중도 추이</h2>
      <Line key={JSON.stringify(attentions)} data={chartData} options={options} />
    </div>
  );
}

export default FocusGraph;
