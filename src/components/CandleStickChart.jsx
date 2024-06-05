import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const CandlestickChart = ({ data }) => {
  const sentiments = Object.values(data.news).map((article) => ({
    sentimentScore: article.sentiment.score,
    sentimentValue: article.sentiment.value,
    summary: article.summary,
  }));

  const chartData = {
    labels: sentiments.map((_, index) => `Article ${index + 1}`),
    datasets: [
      {
        label: "Sentiment Score",
        data: sentiments.map((article) => article.sentimentScore),
        backgroundColor: sentiments.map((article) =>
          article.sentimentValue === "positive" ? "green" : "red"
        ),
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const index = context.dataIndex;
            return [
              `Summary: ${sentiments[index].summary}`,
              `Score: ${context.parsed.y}`,
            ];
          },
        },
      },
    },
  };

  return (
    <div>
      <h2>Sentiment Candlestick Chart</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default CandlestickChart;
