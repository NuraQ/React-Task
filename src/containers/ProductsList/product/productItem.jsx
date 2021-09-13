
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useProductStyle } from "./product.style";
import React, { forwardRef } from "react";
import history from '../../../routes/history';

 const Product = (props) => {
  const classes = useProductStyle();
  const {element} = props
  const navigate = (element) => {
    history.push({
      pathname: '/BookDetails',
      state: element
    })

  };
  const productImg = element.avatar
    ? element.avatar
    : ""
  return (
    <React.Fragment>
      <Grid item xs={12} sm={4} md={3}>
        <Card className={classes.elementRoot}>
          <CardActionArea>
            <CardMedia
              image={`${productImg} `}
              className={classes.media}
              onClick={() => { navigate(props.element) }}
            ></CardMedia>
            <CardContent className={classes.cardContent}>
              <div className={classes.textWrapper}>
                <Typography
                  className={classes.typoFont}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {element.first_name}
                </Typography>
                <div class={classes.icon}>
                  <MoreVertIcon />
                </div>
              </div>
              <Typography
                className={classes.timePublished}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                2 weeks ago
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </React.Fragment>
  );
}
export default Product;