import React from "react";
import { Grid } from "@material-ui/core";
import useNotFoundStyles from "./notFound.style";
import   Images  from "../../images/index";
import Img from "../../images/not-found-page.jpg";

const NotFound = () => {
  const classes = useNotFoundStyles();
  const {  svgContainer } = classes;
    console.log(Images.NotFoundImg)
  return (
    <Grid container justify="center" >
      <Grid item lg={6} xs={12} className={svgContainer}>
        <img src={Img} />
      </Grid>
    </Grid>
  );
};

export default NotFound;