import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./style.css";
const ChartComponent = ({ sparkline, priceChange }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      // Destroy existing chart instance
      chartInstance.current.destroy();
    }

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: Array.from({ length: sparkline.length }, (_, i) => i + 1),
          datasets: [
            {
              label: "Price",
              data: sparkline,
              fill: true,
              backgroundColor: priceChange < 0 ? "red" : "green",
              borderColor: priceChange < 0 ? "red" : "green",
              borderWidth: 2,
              pointRadius: 0, // Hide points
              
            }
          ],
        },
        options: {
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
        },
      });
    }

    // Cleanup on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [sparkline, priceChange]);

  return <div className="chart-container"><canvas ref={chartRef}/></div>;
};

export default ChartComponent;
