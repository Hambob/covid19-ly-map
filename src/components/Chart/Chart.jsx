import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchTheAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchTheAPI();
  });

  const lineChart =
    dailyData !== undefined ? (
      <Line
        data={{
          labels: dailyData.map((random) => '-'),
          datasets: [
            {
              data: dailyData.map(({TotalConfirmed}) =>  TotalConfirmed),
              label: "المصابين",
              borderColor: "#e74c3c",
              fill: true,
            },
            {
              data: dailyData.map(({ TotalDeaths }) => TotalDeaths),
              label: "الوفيات",
              borderColor: "#34495e",
              fill: true,
            },
            {
              data: dailyData.map(({ TotalRecovered }) => TotalRecovered),
              label: "المتعافين",
              borderColor: "#2ecc71",
              fill: true
            }
          ],
        }}
      />
    ) : (
      <div> Error</div>
    );
  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
