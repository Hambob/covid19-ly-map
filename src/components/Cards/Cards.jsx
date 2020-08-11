import React from "react";
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import cx from "classnames";

const Cards = ({
  data: {
    TotalConfirmed,
    TotalRecovered,
    TotalDeaths,
    Date: date,
  },
}) => {
  if (
    ( !TotalConfirmed || !TotalRecovered || !TotalDeaths)
  ) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.totalConfirmed)}
        >
          <CardContent>
          <h1>الإصابات</h1>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={TotalConfirmed}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(date).toDateString()}
            </Typography>
            <Typography variant="body2">إجمالي عدد الحالات المؤكدة</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.totalRecovered)}
        >
          <CardContent>
              <h1>المتعافين</h1>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={TotalRecovered}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(date).toDateString()}
            </Typography>
            <Typography variant="body2">
              اجمالي عدد الحالات المتعافية
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.totalDeaths)}
        >
          <CardContent>
            <h1>الوفيات</h1>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={TotalDeaths}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(date).toDateString()}
            </Typography>
            <Typography variant="body2">اجمالي حالات الوفاء</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
