import React, { useState, useEffect } from 'react';
import ReactApexChart from "react-apexcharts";

const Chart = ({ sparkline, priceChange }) => {
    const [chartOptions, setChartOptions] = useState({
        series: [{
            data: []
        }],
        chart: {
            type: "area",
            height: 50,
          width:150,
            sparkline: { enabled: true },
            animations: { enabled: false },
        },
        tooltip: { enabled: false },
        stroke: { width: 1 },
        colors: []
    });

    useEffect(() => {
        if (sparkline && sparkline.length > 0) {
            setChartOptions({
                ...chartOptions,
                series: [{
                    data: [...sparkline]
                }],
                colors: [chartColor()]
            });
        }
    }, [sparkline, priceChange]);

    function chartColor() {
        if (priceChange <= 0) {
            return '#ff3131';
        } else {
            return "#25df3e";
        }
    }

    if (!sparkline || sparkline.length === 0) {
        return <div>No sparkline data available for chart</div>;
    }

    return (
        <ReactApexChart options={chartOptions} series={chartOptions.series} type="area" height={50} width={150} />
    );
};

export default Chart;
