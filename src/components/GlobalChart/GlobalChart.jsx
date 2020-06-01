import React, { useState, useLayoutEffect } from "react";
import { Pie } from "react-chartjs-2";
import styles from "./GlobalChart.module.css";

const Chart = ({ info: { data } }) => {
  //console.log(data);
  //console.log(data?.local_new_cases);

  const [chartData, setChartData] = useState("");
  useLayoutEffect(() => {
    setChartData({
      labels: ["Active", "Deaths", "Recovered"],
      datasets: [
        {
          label: "Local Covid Patients",

          data: [
            data?.global_total_cases - data?.global_recovered,
            data?.global_deaths,
            data?.global_recovered,
          ],

          backgroundColor: ["rgb(20, 109, 187)", "#ff8484", "rgb(27, 187, 6)"],
        },
      ],
    });
  }, [data]);

  return (
    <div className={styles.chart}>
      <Pie data={chartData} width={500} height={500} options={{}} />
    </div>
  );
};
export default Chart;
